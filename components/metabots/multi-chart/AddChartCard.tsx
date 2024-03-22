import { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LuPlusSquare } from "react-icons/lu";
import Search from "@/components/metabots/multi-chart/Search";
interface Props {
  height: number;
}

const AddChartCard: FC<Props> = ({ height }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="flex flex-col w-full bg-[#212E40] justify-center items-center gap-3 cursor-pointer rounded-lg"
            style={{ height: `${height}px` }} // Dynamic height based on the prop
          >
            <LuPlusSquare className="font-mormal text-6xl" />
            <h2 className="font-normal text-lg">Add Chart</h2>
            <h4 className="font-normal text-lg">16 of 16 slots remaining</h4>
          </div>
        </DialogTrigger>

        <DialogContent className="max-w-[50vw] max-h-[70vh] h-[70vh] w-[50vw] bg-[#212E40] border-none left-1/2 top-1/2 overflow-y-auto">
          <Search />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddChartCard;
