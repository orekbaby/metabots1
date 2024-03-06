 <Tabs defaultValue="about" className="w-[400px]">
      <TabsList>
        <TabsTrigger
          className="font-semibold text-sm text-[#0D6EFD] border-b-2 border-[#0D6EFD]"
          value="about"
        >
          {" "}
          About Metabots
        </TabsTrigger>
        <TabsTrigger
          className="font-semibold text-sm text-[#0D6EFD] border-b-2 border-[#0D6EFD]"
          value="terminal"
        >
          {" "}
          Smart Trading Terminal
        </TabsTrigger>
      </TabsList>
      <TabsContent value="about">
        <Metabots />
      </TabsContent>
      <TabsContent value="terminal">Change your password here.</TabsContent>
    </Tabs>
