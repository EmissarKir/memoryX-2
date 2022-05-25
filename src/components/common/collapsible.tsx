import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styled from "styled-components";

type CollapsibleProps = {
  title: string;
  index: number;
  maxCount: number;
  children: JSX.Element;
};

const StyledCard = styled.div`
  padding: 100px 50px;
  color: rgb(65, 81, 103);

  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  /* box-shadow: 25px 25px 50px rgba(65, 81, 103, 0.25),
    -10px -10px 30px rgba(65, 81, 103, 0.1),
    inset -5px -5px 15px rgba(65, 81, 103, 0.5); */
`;

const StyledCardExercise = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const StyledTitleCard = styled.div`
  line-height: 1.5;
  font-weight: 700;
  font-size: 24px;
`;
const StyledSubTitleCard = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;
const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  index,
  maxCount,
  children,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    setIsVisible(false);
  }, [index]);
  return (
    <StyledCard onClick={handleVisibility}>
      <StyledCardExercise>
        <div>
          <StyledSubTitleCard>{`${
            index + 1
          } / ${maxCount} `}</StyledSubTitleCard>
          <StyledTitleCard>
            <ReactMarkdown children={title} remarkPlugins={[remarkGfm]} />
          </StyledTitleCard>
        </div>
        <div>
          <motion.div animate={isVisible ? { rotate: 180 } : { rotate: 0 }}>
            <div>
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </motion.div>
        </div>
      </StyledCardExercise>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            key={"sdsd"}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledCard>
  );
};

export default Collapsible;
