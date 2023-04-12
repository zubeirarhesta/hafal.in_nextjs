import Navbar from "../../components/Navbar";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";
import Cards from "../../components/Cards";
import Detail from "../../components/Detail";
import cardPic1 from "../../public/images/img-5.jpg";
import cardPic2 from "../../public/images/img-8.jpg";
import cardPic3 from "../../public/images/img-9.jpg";
import cardPic4 from "../../public/images/img-6.jpg";
import cardPic5 from "../../public/images/img-2.jpg";
import cardPic6 from "../../public/images/img-1.jpg";
import teacherPic1 from "../../public/images/teacher1.png";
import teacherPic2 from "../../public/images/teacher2.jpeg";
import teacherPic3 from "../../public/images/teacher3.jpg";
import styles from "../../components/Cards.module.css";
import { TitleContext } from "../../components/Contexts";

export default function Home() {
  const title = "hafal.in";
  return (
    <>
      <TitleContext.Provider value={title}>
        <Navbar />
        <Detail />
        <Cards title={"Learn from our experienced teachers!"}>
          <ul className={styles.cards__items}>
            <CardItem
              src={cardPic1}
              src2={teacherPic3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="1 - 5"
              path="/courses"
              teacher="fulan"
              price="50k"
            />
            <CardItem
              src={cardPic2}
              src2={teacherPic1}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="30"
              path="/courses"
              teacher="hanifah"
              price="30k"
            />
            <CardItem
              src={cardPic3}
              src2={teacherPic2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="1 - 10"
              path="/courses"
              teacher="ahmad"
              price="70k"
            />
          </ul>
          <ul className={styles.cards__items}>
            <CardItem
              src={cardPic4}
              src2={teacherPic1}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="1 - 30"
              path="/courses"
              teacher="said"
              price="120k"
            />
            <CardItem
              src={cardPic5}
              src2={teacherPic2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="1 - 5"
              path="/courses"
              teacher="siti"
              price="50k"
            />
            <CardItem
              src={cardPic6}
              src2={teacherPic3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              label="1 - 5"
              path="/courses"
              teacher="fulan"
              price="50k"
            />
          </ul>
        </Cards>

        <Content />
        <Footer />
      </TitleContext.Provider>
    </>
  );
}
