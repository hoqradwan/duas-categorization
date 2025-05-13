import DuaApp from "@/components/DuaApp";

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
    <div>
      <h1>I am red. lal e lal shahjalal</h1>
      <DuaApp />
    </div>
  );
}
