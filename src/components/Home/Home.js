import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Home.css";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  Select,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Home = ({
  name,
  setName,
  fetchQuestions,
  fetchTopics,
  topics,
  incorrect,
  setincorrect,
}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const location = useLocation();
  let title = location.state;
  if (title.toLowerCase() === "java") {
    var id = 1;
  } else {
    var id = 2;
  }
  // console.log(title);

  const history = useHistory();

  useEffect(() => {
    fetchTopics(title);
  }, []);

  const handleSubmit = () => {
    fetchQuestions(title);
    setincorrect([]);
    history.push({ pathname: "/quiz", state: { id } });
  };

  return (
    <div className="content hiii">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Select Topics</span>
        {topics.length !== 0 ? (
          <CheckboxGroup colorScheme="green">
            <Flex
              marginTop={5}
              marginBottom={3}
              border="1px solid #ddd"
              borderRadius="15px"
              p="15px"
              align="center"
              justify="space-between"
              wrap="wrap"
            >
              {topics.map((topic, index) => (
                <Checkbox
                  size="lg"
                  key={index}
                  value={topic}
                  m="5px"
                  pl="10px"
                  border="1px solid #ddd"
                  borderRadius="10px"
                  _hover={{ bg: "blue.50" }}
                >
                  <Box
                    padding={3.5}
                    marginLeft={2}
                    fontWeight={500}
                    fontSize="16px"
                    minW="200px"
                  >
                    {topic}
                  </Box>
                </Checkbox>
              ))}
            </Flex>
          </CheckboxGroup>
        ) : (
          <Spinner w={20} h={20} marginY="280px" size="xl" alignSelf="center" />
        )}
        <div className="settings__select">
          <Button
            onClick={handleSubmit}
            color="white"
            bg="ctaColor"
            _hover={{ bg: "ctaHover" }}
            h="50px"
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
