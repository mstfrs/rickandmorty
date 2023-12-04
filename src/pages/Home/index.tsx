import Header from "../../components/Header";
import LocationCardList from "../../components/LocationCardList";
const HomePage:React.FC = () => {
  return (
    <div className="container max-h-[90%]">
      <Header />
      <LocationCardList />
    </div>
  );
};

export default HomePage;
