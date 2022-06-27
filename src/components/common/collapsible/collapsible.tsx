import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useResponsive } from "../../../hooks/useResponsive";
import Text from "../text/text";
import { SAngleDown, SCard, SCardExercise, SText } from "./collapsible.style";

type CollapsibleProps = {
  title: string;
  index: number;
  maxCount: number;
  children: JSX.Element;
};

export const Collapsible: FC<CollapsibleProps> = ({
  title,
  index,
  maxCount,
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const isMobile = useResponsive(720);

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsVisible(false);
  }, [index]);

  return (
    <SCard onClick={handleVisibility}>
      <SCardExercise>
        <div>
          <Text view="secondary">{`${index + 1} / ${maxCount} `}</Text>

          <Text size={isMobile ? "l" : "2l"} weight="bold">
            <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
          </Text>
        </div>
        <div>
          <motion.div animate={isVisible ? { rotate: 180 } : { rotate: 0 }}>
            <SAngleDown />
          </motion.div>
        </div>
      </SCardExercise>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={"sdsd"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SText>{children}</SText>
          </motion.div>
        )}
      </AnimatePresence>
    </SCard>
  );
};
