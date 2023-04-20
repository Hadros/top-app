import {Button, Htag, P, Rating, Tag} from "../components";
import {useEffect, useState} from "react";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItem} from "../interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log('Counter ' + counter);
    return function cleanup() {
      console.log('Unmount');
    }
  });

  useEffect(() => {
    console.log('Mounted');
  }, []);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Button appearance={"primary"} arrow={"right"} onClick={() => setCounter(x => x + 1)}>Button</Button>
      <Button appearance={"ghost"} arrow={"down"}>Button2</Button>
      <P size={"small"}>kek1</P>
      <P size={"medium"}>kek2</P>
      <P size={"large"}>kek3</P>
      <Tag size={"small"}>Small</Tag>
      <Tag size={"medium"} color={"red"}>Red</Tag>
      <Tag size={"small"} color={"green"}>Green</Tag>
      <Tag color={"primary"}>Green</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
