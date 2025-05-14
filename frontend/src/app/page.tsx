import DuaApp from "@/components/DuaApp";
import RightNav from "@/components/RightNav";
import SideNav from "@/components/SideNav";
import TopNav from "@/components/TopNav";

interface Category {
  cat_id: number;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}

interface HomeProps {
  categories: Category[];
}

// Fetch categories from your API (Server-Side) in `getServerSideProps`

export default function Home({ categories }: HomeProps) {
  return (
    <>
      <div className="flex">
        <div className="" >
          <SideNav />
        </div>

        <div className="">
         
        </div>
        <div className="flex justify-between items-center mx-4 my-4 bg-[#fafffa]">
          <DuaApp />

          </div>
      </div>
    </>


  );
}
