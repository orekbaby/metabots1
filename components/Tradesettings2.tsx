import React, { FC, useEffect, useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Slider1 } from "@/components/custom/slider1";
import { Switch1 } from "@/components/custom/switch1";
import { MdOutlineSettings } from 'react-icons/md';
import { Button } from './ui/button';
import { BsFillExclamationCircleFill } from 'react-icons/bs';
import { fetchJitoTipFee } from '@/utils/apiCalls';
import {JitoTipData} from "@/utils/types"
import { useDispatch, useSelector } from 'react-redux';
import { setTradeSettings } from '@/store/slices/tradeSettingsSlice';
import { editUserSettings } from '@/utils/apiCalls';
import { AppDispatch, RootState } from '@/store';
import { useTpSl } from '@/context/TPSLContext';
import { toast } from '@/hooks/use-toast';
import { fetchUserProfile } from '@/store/slices/authSlice';

interface TradeSettingsProps {
    data?: JitoTipData;
  
  }

const TradeSettings2:FC<TradeSettingsProps> = (data) => {
  const { isOn, toggleIsOn } = useTpSl();
const [jitoTipData, setJitoTipData] = useState<number>(0);
const { user, authToken } = useSelector((state: RootState) => state.auth);
const tradeSettings = useSelector((state: RootState) => state.tradeSettings);
const [isDialogOpen, setIsDialogOpen] = useState(false);
const [isEnabled, setIsEnabled] = useState(true);
const [isCheckEnabled, setIsCheckEnabled] = useState(true);
const [responseData, setResponseData] = useState<any>();
const dispatch = useDispatch<AppDispatch>();
const [dialogOpen, setDialogOpen] = useState(false);
const [activeButton, setActiveButton] = useState(tradeSettings.jitoTipLabel);
const closeDialog = () => setDialogOpen(false);
const openDialog = () => setDialogOpen(true);

const handleToggleChange = () => {
    setIsEnabled((prev) => !prev); 
    dispatch(setTradeSettings({
      ...tradeSettings, 
      jitoCheck: isEnabled,
    }));

  };

  const handleCheckboxChange = () => {
    setIsCheckEnabled((prev) => !prev); 
    dispatch(setTradeSettings({
      ...tradeSettings, 
      solPriorityCheck: isCheckEnabled,
    }));
  };


const handleSliderChange = (value: number[]) => {
  const newSlippage = value[0];
  dispatch(setTradeSettings({
    ...tradeSettings, 
    slippage: newSlippage,
  }));

 
};


  const handlePercentageChange = (value: number[], sliderNumber: number) => {
    if (sliderNumber === 1) {
    

      dispatch(setTradeSettings({
        ...tradeSettings, 
        takeProfitPercentage: value[0], 
      }));
  
      
     
    } else if (sliderNumber === 2) {
      dispatch(setTradeSettings({
        ...tradeSettings, 
        stopLossPercentage: value[0], 
      }));
     
    }
  };

  
  useEffect(() => {
    
    const localTradeSettings = localStorage.getItem("localTradeSettings");
   if (localTradeSettings)  
   {
    dispatch(setTradeSettings({
    ...tradeSettings, 
    // stopLossPercentage: value[0], 
  }));
}
   
 
  }, []);


  useEffect(() => {
    const getData = async () => {
      try {
      
        const response = await fetchJitoTipFee();
       
        setResponseData(response.data)
      
        setJitoTipData(responseData?.landed_tips_75th_percentile || 0 ); 
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    getData();
  }, []);

useEffect(() => {
    const storedSettings = localStorage.getItem('tradeSettings');
    if (storedSettings) {
      const settings = JSON.parse(storedSettings);
      dispatch(setTradeSettings(settings));
    }
  }, [dispatch]);


  useEffect(() => {
    if (authToken) {
      dispatch(fetchUserProfile(authToken));
    }
  }, [authToken, dispatch]);


  const handleSaveSettings = async () => {
  if (!user?.token) {
    console.error('User token is missing');
    return;
  }

  const settings = {
    slippage: tradeSettings.slippage,
    solPriorityFee: tradeSettings.solPriorityCheck ? tradeSettings.solPriorityFee : '0',
    jitoTipValue: jitoTipData,
    jitoCheck: tradeSettings.jitoCheck,
  };

  console.log({settings})

  const localSettings = {
    takeProfit: tradeSettings.takeProfit,
    stopLoss: tradeSettings.stopLoss,
    takeProfitPercentage: tradeSettings.takeProfitPercentage,
    stopLossPercentage: tradeSettings.stopLossPercentage,
    solPriorityCheck: tradeSettings.solPriorityCheck,
    slippage: tradeSettings.slippage,
    solPriorityFee: tradeSettings.solPriorityCheck ? tradeSettings.solPriorityFee : '0',
    jitoTipValue: tradeSettings.jitoTipValue,
    jitoCheck: tradeSettings.jitoCheck,
  };

  try {
    await editUserSettings(user?.token, settings);
    localStorage.setItem('localTradeSettings', JSON.stringify(localSettings));
    dispatch(setTradeSettings(settings));
    
    // Update user profile after saving settings
    dispatch(fetchUserProfile(user?.token));

    // Close the dialog
    closeDialog();

    // Display success notification
    toast({
      description: "Your trade settings have been saved successfully",
    });
  } catch (error) {
    console.error('Failed to save trade settings', error);
    toast({
      description: "Your trade settings failed to save",
      variant: "destructive",
    });
  }
};

  
  const handleClick = (tipNumber:number, label:string) => {
    // Set Jito Tip Data based on the tip number
    if (tipNumber === 50) {
      setJitoTipData(responseData?.landed_tips_50th_percentile);
    } else if (tipNumber === 75) {
      setJitoTipData(responseData?.landed_tips_75th_percentile);
    } else if (tipNumber === 99) {
      setJitoTipData(responseData?.landed_tips_99th_percentile);
    } else {
      setJitoTipData(0);
    }

    // Update active button and dispatch trade settings
    setActiveButton(label);
    const updatedSettings = { jitoTipValue: tipNumber, jitoTipLabel: label };
    dispatch(setTradeSettings(updatedSettings));
  };
  


  
  const handleTakeProfitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setTradeSettings({
      ...tradeSettings, 
      takeProfit: value, 
    }));
 
  };

  const handleStopLossChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setTradeSettings({
      ...tradeSettings, 
      stopLoss: value, 
    }));
 
  };

  const handleSolFee = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
  
    
    dispatch(setTradeSettings({
      ...tradeSettings, 
      solPriorityFee: value, 
    }));
  
   };
   
 
  

  return (
    <>
   <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
  <DialogTrigger>
    <div className="text-[#FFC107]  cursor pointer text-xs">
     Settings
    </div>
  </DialogTrigger>

  <DialogContent className=" w-[430px] h-auto rounded-2xl bg-[#0C1623] border-[#1A232F] py-2 px-3 border-none overflow-y-auto">
    <div>
      <div className="w-full h-[44px] border-b flex justify-start items-center border-[#1A232F]">
        <h3 className="font-semibold text-base">Trade Settings</h3>
      </div>

      

      <div className="pt-1">
      <h3 className="text-sm md:text-base lg:text-sm font-semibold text-white">
        Slippage
      </h3>
      <div className="relative">
        <div className="text-white flex justify-center items-center w-[26.83px] h-[15px] rounded-[20.38px] bg-[#212E40] font-semibold text-[8px] absolute top-4 left-1/2 transform -translate-x-1/2">
          {tradeSettings.slippage}%
        </div>
        <Slider1
       value={[tradeSettings.slippage]}
       onValueChange={handleSliderChange}
      max={100}
      step={1}
     className="bg-[#0D6EFD] w-full h-2 rounded-lg mt-2"
    />
      </div>
    </div>
            <div className="pt-10">
                <label className="font-normal text-sm text-[#707070]">Sol Priority Fee</label>
                <div className="flex items-center justify-start gap-2">
      
                <input
      type="checkbox"
      checked={tradeSettings.solPriorityCheck}
      onChange={handleCheckboxChange}
      className="w-5 h-5 border-2 border-blue-500 rounded appearance-none cursor-pointer focus:outline-none focus:ring-0
                 checked:border-blue-500 checked:text-blue-500 checked:before:content-['✔'] checked:before:text-blue-500 checked:before:text-xs checked:before:flex checked:before:justify-center checked:before:items-center"
      id="wallet-checkbox"
    />

    {/* solPriorityFee input */}
    <input
      className="mb-3 text-xs w-[75%] h-[38px] py-[8px] mt-3 px-[16px] bg-[#0C141F] text-white border-[#212E40] border rounded-[8px] focus:outline-none"
      type="number"
      autoComplete="off"
      value={tradeSettings.solPriorityFee}
      onChange={handleSolFee}
      disabled={!tradeSettings.solPriorityCheck}  
    />
  
    </div>
</div>
<div className="flex p-2 justify-start gap-2 items-center">
                  <h3 className="text-sm font-medium text-left">
                   Auto Gas
                  </h3>
                  <BsFillExclamationCircleFill />
                  {/* <IoIosArrowUp className="text-sm md:text-base lg:text-base" /> */}
                  <div className='w-[35px] h-[20px] rounded-[24px] flex justify-center items-center bg-green-500 '>
                    <p className='text-green-300 font-semibold text-[12px]'>On</p>
                  </div>
                </div>

      <div className="flex justify-between items-center p-2">
        <div className="flex justify-start items-start ">

<h4 className='font-semibold text-sm '>TURBO AUTO TIP JITO</h4>
</div>
<div className="flex justify-end items-center gap-2">
  {/* Toggle Switch */}
  <div
    onClick={handleToggleChange}
    className={`w-10 h-5 rounded-full cursor-pointer relative ${tradeSettings.jitoCheck ? 'bg-green-500' : 'bg-gray-400'}`}
  >
    {/* Circle inside the toggle */}
    <div
      className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 absolute top-[2px] ${tradeSettings.jitoCheck ? 'translate-x-[20px]' : 'translate-x-[2px]'}`}
    />
  </div>

  {/* Toggle status text */}
  <p className="font-medium text-sm">{tradeSettings.jitoCheck ? 'Enabled' : 'Disabled'}</p>
</div>

      </div>

      <div className="p-2 font-semibold text-sm text-blue-200">
            {`${tradeSettings.jitoTipLabel} ${tradeSettings.jitoTipValue}% Success Rate): ${jitoTipData?.toFixed(6)} SOL`}
        </div>


        <div className="flex justify-between">
      {/* Normal Button */}
      <div className="relative">
        <div
          className={`absolute left-[36%] flex justify-center items-center right-[45%] top-[-10%] w-[32px] h-[20px] rounded-2xl ${
            activeButton === 'Normal' ? 'bg-white' : 'bg-green-500'
          }`}
        >
          <p className={`text-[7px] ${activeButton === 'Normal' ? 'text-green-500' : 'text-white'}`}>50%</p>
        </div>
        <button
          onClick={() => handleClick(50, 'Normal')}
          className={`w-[85px] font-medium text-xs h-[34px] px-2 py-[11px] border rounded-[8px] flex items-center ${
            activeButton === 'Normal' ? 'bg-green-500 text-white' : 'bg-transparent text-[#CED4DA]'
          } border-[#212E40] ${!tradeSettings.jitoCheck ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!tradeSettings.jitoCheck}
        >
          Normal
        </button>
      </div>

      {/* High Button */}
      <div className="relative">
        <div
          className={`absolute left-[36%] right-1/2 top-[-10%] flex justify-center items-center w-[32px] h-[20px] rounded-2xl ${
            activeButton === 'High' ? 'bg-white' : 'bg-purple-400'
          }`}
        >
          <p className={`text-[7px] ${activeButton === 'High' ? 'text-purple-400' : 'text-black'}`}>75%</p>
        </div>
        <button
          onClick={() => handleClick(75, 'High')}
          className={`w-[85px] font-medium text-xs h-[34px] px-2 py-[11px] border rounded-[8px] flex items-center ${
            activeButton === 'High' ? 'bg-purple-400 text-white' : 'bg-transparent text-[#CED4DA]'
          } border-[#212E40] ${!tradeSettings.jitoCheck ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!tradeSettings.jitoCheck}
        >
          High
        </button>
      </div>

      {/* Extremely Button */}
      <div className="relative">
        <div
          className={`absolute left-[36%] right-1/2 top-[-10%] flex justify-center items-center w-[32px] h-[20px] rounded-2xl ${
            activeButton === 'Extremely' ? 'bg-white' : 'bg-blue-500'
          }`}
        >
          <p className={`text-[7px] ${activeButton === 'Extremely' ? 'text-blue-500' : 'text-white'}`}>99%</p>
        </div>
        <button
          onClick={() => handleClick(99, 'Extremely')}
          className={`w-[85px] font-medium text-xs h-[34px] px-2 py-[11px] border rounded-[8px] flex items-center ${
            activeButton === 'Extremely' ? 'bg-blue-500 text-white' : 'bg-transparent text-[#CED4DA]'
          } border-[#212E40] ${!tradeSettings.jitoCheck ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={!tradeSettings.jitoCheck}
        >
          Extremely
        </button>
      </div>
    </div>

<div className="px-4 pb-5">
      <Button
            size="lg"
            className="mt-8 w-full h-[38px] md:h-[44px] lg:h-[44px] rounded-[6px] md:rounded-[8px] lg:rounded-[8px] py-[10px] px-[18px] bg-[#0D6EFD]
             text-white text-[14px] md:text-base lg:text-base font-semibold leading-[23.8px]"
             onClick={handleSaveSettings}
         >
           Save Trade Settings
          </Button>
          </div>
      </div>
      </DialogContent>
  </Dialog>
    
    </>
  )
}

export default TradeSettings2