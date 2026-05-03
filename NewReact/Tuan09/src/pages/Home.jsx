import Banner from '../components/home/Banner';
import SectionHeader from '../components/home/SectionHeader';
import RecipeCard from '../components/home/RecipeCard';
import EditorPickCard from '../components/home/EditorPickCard';
import { useRecipes } from '../context/RecipeContext';

export default function Home() {
  const { allRecipes } = useRecipes();

  // Phân loại dữ liệu từ Context
  const freshRecipes = allRecipes.filter(r => r.id >= 11 && r.id <= 18);
  const summerRecipes = allRecipes.filter(r => r.id >= 1 && r.id <= 4);
  const videoRecipes = allRecipes.filter(r => r.id >= 5 && r.id <= 8);
  
  const editorPicks = [
    {
      id: 101,
      title: 'Strawberry smoothie',
      time: '5 minutes',
      img: '/images/visily-image-47.png',
      author: 'Jennifer King',
      desc: 'A refreshing blend of fresh strawberries, banana, and yogurt. Perfect for a quick and healthy breakfast.',
    },
    {
      id: 102,
      title: 'Latte Art cappuccino',
      time: '10 minutes',
      img: '/images/visily-image-48.png',
      author: 'Marcus Allen',
      desc: 'Learn how to create stunning latte art with this step-by-step guide for making the perfect creamy cappuccino.',
    },
  ];

  return (
    <div className="w-full pb-16">
      <Banner />

      <div className="py-8 px-6 space-y-16">
        {/* 1 ── Fresh From Our Kitchen */}
        <section>
          <SectionHeader
            title="Fresh From Our Kitchen"
            subtitle="Explore our latest and most delicious additions."
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freshRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        </section>

        {/* 2 ── This Summer Recipes */}
        <section>
          <SectionHeader
            title="This Summer Recipes"
            subtitle="We have all your Independence Day sweets covered."
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {summerRecipes.map(r => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        </section>

        {/* 3 ── Recipes With Videos */}
        <section>
          <SectionHeader
            title="Recipes With Videos"
            subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
          />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videoRecipes.map(r => <RecipeCard key={r.id} recipe={r} type="video" />)}
          </div>
        </section>

        {/* 4 ── Editor's Pick */}
        <section>
          <SectionHeader
            title="Editor's pick"
            subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {editorPicks.map(r => <EditorPickCard key={r.id} recipe={r} />)}
          </div>
        </section>
      </div>
    </div>
  );
}
