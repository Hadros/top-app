import {Button, Htag, P, Rating, Tag} from "../components";
import {useEffect, useState} from "react";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
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
      <Htag tag="h1">{counter}</Htag>
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
