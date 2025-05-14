"use client";

import { useState, useEffect } from 'react';
import TopNav from './TopNav';
import SideNav from './SideNav';
import RightNav from './RightNav';
import HomeNav from './HomeNav';
import Image from 'next/image';

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
  dua_arabic: string;
  clean_arabic: string;
  transliteration_en: string;
  refference_en: string;
}

const DuaMain = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [filteredCategories, setFilteredCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [duas, setDuas] = useState<Dua[]>([]);
  const [selectedDua, setSelectedDua] = useState<number | null>(null);

  // Fetch categories when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:2000/api/categories');
        const categoriesData = await res.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategorySelect = async (cat_id: number) => {
    const category = categories.find((cat) => cat.cat_id === cat_id);
    setSelectedCategory(category || null);

    // Fetch subcategories for the selected category
    try {
      const res = await fetch(`http://localhost:2000/api/sub-categories/${cat_id}`);
      const subcategoriesData = await res.json();
      setSubcategories(subcategoriesData);
      setDuas([]); // Clear duas when category changes
      setSelectedDua(null);
    } catch (error) {
      console.error("Failed to fetch subcategories:", error);
    }
  };

  const handleSubcategorySelect = async (subcat_id: number) => {
    // Fetch duas for the selected subcategory
    try {
      const res = await fetch(`http://localhost:2000/api/duas/${subcat_id}`);
      const duasData = await res.json();
      setDuas(duasData);
      setSelectedDua(null);
    } catch (error) {
      console.error("Failed to fetch duas:", error);
    }
  };

  const handleDuaSelect = (duaId: number) => {
    setSelectedDua(duaId);
  };

  const handleSearchChange = (e: any) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter categories based on the search query
    if (query) {
      const filtered = categories.filter(category =>
        category.cat_name_en.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(filtered);
    } else {
      setFilteredCategories(categories); // Show all categories if search is cleared
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopNav />
      <div className="flex flex-1">
        <div className="w-16 bg-[#edf6ea] flex-shrink-0">
          <SideNav />
        </div>

        <div className="flex-1">
          <HomeNav />

          <div className="flex flex-1">
            {/* Left Navigation (Categories) */}
            <div className="w-64 bg-white border-r border-gray-200 p-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for Dua Categories"
                  className="w-full p-2 pl-8 border border-gray-300 rounded-lg bg-gray-50"
                  value={searchQuery }
                  onChange={handleSearchChange}
                />

                <svg className="absolute left-2 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>

              <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
                {filteredCategories.map((category) => (
                  <div key={category.cat_id} className="mb-2">
                    <button
                      className={`flex items-center w-full p-3 text-left rounded-lg transition-colors ${selectedCategory?.cat_id === category.cat_id
                          ? 'bg-[#e8f0f8] text-[#1fa47b]'
                          : 'hover:bg-gray-100'
                        }`}
                      onClick={() => handleCategorySelect(category.cat_id)}
                    >
                      <div className="flex items-center">
                        {/* Category Icon placeholder */}
                        <div className="w-8 h-8 bg-[#e8f0f8] rounded-full flex items-center justify-center mr-3">
                          <span className="text-[#1fa47b] text-xs">{category.cat_id}</span>
                        </div>
                        <div>
                          <p className="font-medium">{category.cat_name_en}</p>
                          <p className="text-xs text-gray-500">{category.no_of_dua} Duas</p>
                        </div>
                      </div>
                    </button>

                    {selectedCategory?.cat_id === category.cat_id && (
                      <div className="ml-8 mt-2 space-y-1">
                        {subcategories.map((subcategory) => (
                          <button
                            key={subcategory.subcat_id}
                            className="w-full text-left p-2 text-sm hover:bg-gray-100 rounded"
                            onClick={() => handleSubcategorySelect(subcategory.subcat_id)}
                          >
                            {subcategory.subcat_name_en}
                            <span className="text-xs text-gray-500 ml-1">({subcategory.no_of_dua})</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-[#fafffa] p-6">
              {selectedCategory && (
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Section: {selectedCategory.cat_name_en}
                  </h2>

                  {duas.length > 0 ? (
                    <div className="space-y-6">
                      {duas.map((dua, index) => (
                        <div
                          key={dua.dua_id}
                          className={`border rounded-lg p-6 ${selectedDua === dua.dua_id ? 'border-[#1fa47b]' : 'border-gray-200'
                            }`}
                          onClick={() => handleDuaSelect(dua.dua_id)}
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-8 h-8 bg-[#eef6eb] rounded-full flex items-center justify-center mr-3">
                              <span className="text-[#1fa47b]">{index + 1}</span>
                            </div>
                            <h3 className="font-medium text-gray-700">
                              {dua.dua_name_en}
                            </h3>
                          </div>

                          <div className="text-right mb-4">
                            <p className="text-2xl leading-relaxed text-right mb-2" dir="rtl">
                              {dua.dua_arabic}
                            </p>
                          </div>

                          <div className="text-gray-600 italic mb-4">
                            {dua.transliteration_en}
                          </div>

                          <h4 className="font-medium mb-2">Translation</h4>
                          <p className="text-gray-700 mb-4">
                            {dua.translation_en}
                          </p>

                          <div className="border-t pt-4 text-gray-500 text-sm">
                            <p>Reference: {dua.refference_en}</p>
                          </div>

                          <div className="flex justify-end mt-4 space-x-2">
                            <button className="p-2 bg-[#eef6eb] rounded-full">
                              <span className="text-[#1fa47b] text-xs">244</span>
                            </button>
                            <button className="p-2 bg-[#eef6eb] rounded-full">
                              <span className="text-[#1fa47b] text-xs">36</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">Select a subcategory to view duas.</p>
                  )}
                </div>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="w-64 bg-white border-l border-gray-200 p-4">
              <RightNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuaMain;