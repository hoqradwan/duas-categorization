"use client";

import { useState, useEffect } from 'react';

// Define the data types for category, subcategory, and dua
interface Category {
  cat_id: number;
  cat_name_en: string;
  no_of_subcat: number;
  no_of_dua: number;
  cat_icon: string;
}

interface Subcategory {
  subcat_id: number;
  subcat_name_en: string;
  no_of_dua: number;
}

interface Dua {
  dua_id: number;
  dua_name_en: string;
  translation_en: string;
}

const DuaApp = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [duas, setDuas] = useState<Dua[]>([]);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('http://localhost:2000/api/categories');
      const categoriesData = await res.json();
      setCategories(categoriesData);
    };
    fetchCategories();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleCategorySelect = async (cat_id: number) => {
    setSelectedCategory(categories.find((cat) => cat.cat_id === cat_id) || null);

    // Fetch subcategories for the selected category
    const res = await fetch(`http://localhost:2000/api/sub-categories/${cat_id}`);
    const subcategoriesData = await res.json();
    setSubcategories(subcategoriesData);
    setDuas([]); // Clear duas when category changes
  };

  const handleSubcategorySelect = async (subcat_id: number) => {
    // Fetch duas for the selected subcategory
    const res = await fetch(`http://localhost:2000/api/duas/${subcat_id}`);
    const duasData = await res.json();
    setDuas(duasData);
  };

  return (
    <div className="flex">
      <div className="w-1/4 p-4 border-r">
        <h3 className="font-semibold">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li key={category.cat_id}>
              <button
                className="text-left w-full p-2"
                onClick={() => handleCategorySelect(category.cat_id)}
              >
                {category.cat_name_en}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4">
        {selectedCategory && (
          <div>
            <h3 className="font-semibold">{selectedCategory.cat_name_en}</h3>
            <ul>
              {subcategories.map((sub) => (
                <li key={sub.subcat_id}>
                  <button
                    className="text-left w-full p-2"
                    onClick={() => handleSubcategorySelect(sub.subcat_id)}
                  >
                    {sub.subcat_name_en}
                  </button>
                </li>
              ))}
            </ul>

            <div>
              {duas.length > 0 ? (
                <div>
                  <h4 className="font-semibold">Duas</h4>
                  <ul>
                    {duas.map((dua) => (
                      <li key={dua.dua_id}>
                        <p className="font-semibold">{dua.dua_name_en}</p>
                        <p>{dua.translation_en}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>Select a subcategory to view duas.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DuaApp;
