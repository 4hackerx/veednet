"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AvatarButton from "../atoms/AvatarButton";
import Button from "../atoms/Button";
import Card from "../molecules/Card";

interface Avatar {
  src: string;
  name: string;
  person: "boy" | "girl";
}

const avatars: Avatar[] = [
  {
    src: "https://avatar.iran.liara.run/public/boy?username=Scott",
    name: "Scott",
    person: "boy",
  },
  {
    src: "https://avatar.iran.liara.run/public/girl?username=Maria",
    name: "Maria",
    person: "girl",
  },
  {
    src: "https://avatar.iran.liara.run/public/girl?username=Jade",
    name: "Jade",
    person: "girl",
  },
  {
    src: "https://avatar.iran.liara.run/public/girl?username=Klee",
    name: "Klee",
    person: "girl",
  },
  {
    src: "https://avatar.iran.liara.run/public/boy?username=Russo",
    name: "Russo",
    person: "boy",
  },
  {
    src: "https://avatar.iran.liara.run/public/boy?username=Nevin",
    name: "Nevin",
    person: "boy",
  },
];

interface CardProps {
  component: any;
  props: Record<string, any>;
  id: number;
}

const ActionCards = () => {
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.06;
  const [cards, setCards] = useState<CardProps[]>([
    {
      component: SelectAvatar,
      props: { handleSelection, flip },
      id: 1,
    },
    {
      component: ActionCard2,
      props: { flip },
      id: 3,
    },
    {
      component: ActionCard,
      props: { flip },
      id: 2,
    },
  ]);

  function flip() {
    setCards((prevCards) => {
      const newArray = [...prevCards];
      newArray.unshift(newArray.pop()!);
      return newArray;
    });
  }

  function handleSelection(name: string) {
    console.log(`Selected avatar: ${name}`);
  }

  return (
    <div className="flex items-center w-[396px] flex-col h-full p-4 min-w-fit gap-9">
      <p className=" font-outfit font-semibold w-full">Action Cards</p>
      <div className="flex h-full w-full gap-8">
        <div className="relative h-full">
          {cards.map(({ component: CardComponent, props, id }, index) => (
            <motion.div
              key={id}
              style={{
                transformOrigin: "top center",
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
              className="absolute h-full"
            >
              <CardComponent {...props} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionCards;

interface SelectAvatarProps {
  handleSelection: (name: string) => void;
  flip: () => void;
}

interface GeneralCardProps {
  flip: () => void;
}

const SelectAvatar = ({ handleSelection, flip }: SelectAvatarProps) => (
  <Card className="h-full min-w-fit w-[364px] justify-between rounded-3xl">
    <div className="grid grid-cols-3 gap-4">
      {avatars.map((avatar) => (
        <AvatarButton
          key={avatar.name}
          src={avatar.src}
          handleClick={() => handleSelection(avatar.name)}
        />
      ))}
    </div>
    <Button
      className="font-medium"
      text={"Choose An Avatar"}
      handleClick={flip}
    />
  </Card>
);

const ActionCard = ({ flip }: GeneralCardProps) => (
  <Card className="h-full min-w-fit w-[364px] justify-between rounded-3xl">
    <div className="flex items-center justify-center h-44 rounded-lg text-white bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)]">
      <p className="text-2xl font-bold font-atyp">Action Card</p>
    </div>
    <Button className="font-medium" text={"Next Action"} handleClick={flip} />
  </Card>
);

const ActionCard2 = ({ flip }: GeneralCardProps) => (
  <Card className="h-full min-w-fit w-[364px] justify-between rounded-3xl">
    <div className="flex items-center justify-center h-44 rounded-lg text-white bg-[linear-gradient(to_bottom_right,#06b6d4,#10b981)]">
      <p className="text-2xl font-bold font-atyp">Action Card 2</p>
    </div>
    <Button className="font-medium" text={"Another Action"} handleClick={flip} />
  </Card>
);
