import React, { useContext } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Box,
  Text,
  Link,
  DrawerFooter,
  List,
  ListItem,
  Icon,
  useColorMode,
  useColorModeValue,
  Switch,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { ArrowRightIcon, ArrowLeftIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { MapContext } from "../shared";

const Sidebar = () => {
  const customSidebarWidth = 240;
  var customSidebarMaxWidth = 300;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const { funMode, setFunMode } = useContext(MapContext);
  const toast = useToast();

  const toggleSwitch = () => {
    setFunMode(!funMode);
  };

  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied",
        description: "The current view URL was copied to your clipboard.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (e) {
      toast({
        title: "Could not copy",
        description: "Your browser blocked clipboard access.",
        status: "error",
        duration: 2500,
        isClosable: true,
      });
    }
  };

  return (
    <Box pos="absolute">
      <Button
        size="xs"
        id="sidebar-open-btn"
        onClick={onOpen}
        left="0px"
        top="20px"
        h="40px"
        bg={useColorModeValue("#edf2f7", "#242a36")}
        _hover={{ bg: "#ffffff5e" }}
        zIndex={100}
        borderStartRadius="0"
      >
        <ArrowRightIcon />
      </Button>
      <Drawer
        placement={"left"}
        onClose={onClose}
        isOpen={isOpen}
        userSelect={"none"}
        blockScrollOnMount={false}
        zIndex={2}
      >
        <DrawerOverlay />
        <DrawerContent w={customSidebarWidth} maxW={customSidebarMaxWidth}>
          <Button
            onClick={onClose}
            size="xs"
            right="0px"
            top="20px"
            h="40px"
            w="80px"
            borderEndRadius="0"
            bg={useColorModeValue("#edf2f7", "#242a36")}
            _hover={{ bg: "#ffffff5e" }}
            position="absolute"
          >
            <ArrowLeftIcon />
          </Button>
          <DrawerHeader borderBottomWidth="1px">
            <Box w="100%" h="100%" p="7.5px">
              aitu map
            </Box>
          </DrawerHeader>
          <DrawerBody w="100%">
            <List spacing={3}>
              <ListItem>
                <Button
                  onClick={() => toggleColorMode()}
                  boxShadow={"lg"}
                  w="100%"
                >
                  <Text size="sm">change theme</Text>
                  <Icon
                    as={colorMode === "light" ? SunIcon : MoonIcon}
                    ml="0.5rem"
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/xfounzyx/aitumap">
                  <Button boxShadow={"lg"} w="100%">
                    <Text size="sm">github</Text>
                  </Button>
                </Link>
              </ListItem>
              <ListItem>
                <HStack w="100%" justify={"space-between"}>
                  <Text size="sm" as="samp">
                    fun mode beta
                  </Text>
                  <Switch
                    size="lg"
                    isChecked={funMode}
                    onChange={toggleSwitch}
                  />
                </HStack>
              </ListItem>
            </List>
          </DrawerBody>
          <DrawerFooter>
            <List w="100%" display="flex" flexDirection="column">
              <ListItem>
                <Button onClick={handleShare} boxShadow={"lg"} w="100%">
                  <Text size="sm">share this link</Text>
                </Button>
              </ListItem>
              <ListItem justify="space-between">
                
              </ListItem>
              <ListItem>
              </ListItem>
              <ListItem mt={"1rem"}>
                <Link href="https://t.me/yuujiso">
                  <Text as="samp">Report a problem/misleading information</Text>
                </Link>
              </ListItem>
              <ListItem mt={"0.75rem"}>
                <Text fontSize="xs" color="gray.500">
                  Original authors: @yuujisoo and @meeezzanine. they are cool sigmas
                </Text>
              </ListItem>
            </List>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
