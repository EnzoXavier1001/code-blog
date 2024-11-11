import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar";
  
  export const MenuBar = () => {
    return (
      <Menubar className="text-sm border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="focus:outline-none !active:bg-transparent !hover:bg-transparent">
            <img 
              src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid" 
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover mr-2"  // Usando TailwindCSS para ajustar o tamanho da imagem e o estilo
            />
          </MenubarTrigger>
          <MenubarContent className="text-sm border-none shadow-none"> 
            <MenubarItem   className="focus:outline-none !active:bg-transparent !hover:bg-transparent">Edit...</MenubarItem>
            <MenubarSeparator />
            <MenubarItem   className="focus:outline-none !active:bg-transparent !hover:bg-transparent">Add Profile...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  };
  