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
      <Menubar className="border-none shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="focus:outline-none !active:bg-transparent !hover:bg-transparent">
            <img 
              src="https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?semt=ais_hybrid" 
              alt="User Avatar"
              className="w-16 rounded-full object-cover mr-2"
            />
          </MenubarTrigger>
          <MenubarContent> 
            <MenubarItem className="text-2xl">Meu perfil</MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-2xl">Favoritos </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="text-2xl">Sair</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  };
  