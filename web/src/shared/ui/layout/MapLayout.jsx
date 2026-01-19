import React, { useContext } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useColorModeValue, IconButton, Flex, Button, Text, useToast } from "@chakra-ui/react";
import { MapContext, useWindowDimensions } from "../..";
import Wallpaper from "../general/map/Wallpaper";
import IconsCommon from "../general/map/IconsCommon";

const MapLayout = ({ children }) => {
  const { height, width } = useWindowDimensions();
  const backgroundColorPrimary = "#363636ff";
  const backgroundColorSecondary = "#4e4e4eff";
  const backgroundColor = useColorModeValue(
    backgroundColorSecondary,
    backgroundColorPrimary
  );
  const strokeColorLight = "#7f7f7f";
  const strokeColorDark = "#7f7f7f";
  const strokeColor = useColorModeValue(strokeColorLight, strokeColorDark);
  const { funMode, registerPanZoomApi, panZoomApi } = useContext(MapContext);
  const toast = useToast();

  const dropShadow = funMode
    ? "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.5))"
    : "";

  return (
    <TransformWrapper defaultScale={1} onInit={({ instance }) => {
      try { registerPanZoomApi?.(instance); } catch (e) {}
    }}>
      <TransformComponent>
        <svg
          width={width}
          height={height}
          xmlns={"http://www.w3.org/2000/svg"}
          viewBox={"0 0 924.69 396.16"}
        >
          <defs>
            <style>
              {`  
                  .bg {
                    stroke: ${strokeColor};
                    fill: ${backgroundColor};
                  }
                  .map-groups-stairs {
                    fill: ${useColorModeValue("#ffffff", "#1a202c")};
                    pointer-events: none;
                  }
                  .map-groups-stairs polygon, 
                  .map-groups-stairs polyline {
                    stroke: ${strokeColor};
                  }
                  .map-groups-stairs g  path:nth-child(1) {
                    fill: #007aff;
                  }
                  .map-groups-stairs g  path:nth-child(2) {
                    fill: #fff;
                  }
                  .map-groups-stairs-fill {
                    fill: ${backgroundColor};
                    pointer-events: none;
                  }
                  .map-groups-stairs-fill polygon, 
                  .map-groups-stairs-fill polyline {
                    stroke: ${strokeColor};
                  }
                  .map-groups-stairs-fill g  path:nth-child(1) {
                    fill: #007aff;
                  }
                  .map-groups-stairs-fill g  path:nth-child(2) {
                    fill: #fff;
                  }
                  .map-groups-gym path,
                  .map-groups-gym line,
                  .map-groups-gym polygon,
                  .map-groups-gym polyline {
                    stroke:${strokeColor} !important;
                    fill:#4da2ff;  
                    
                  }
                  .map-groups-gym-pole path,
                  .map-groups-gym-pole line,
                  .map-groups-gym-pole polygon {
                    stroke:${strokeColor};
                    stroke-miterlimit:10;
                    stroke-width: 0.75;
                    fill:none !important;
                    filter: ${dropShadow};
                  }
                  .map-groups-rooms g line,
                  .map-groups-rooms g polygon,
                  .map-groups-rooms g polyline {
                    stroke:${strokeColor};
                    fill:#4da2ff;
                    filter: ${dropShadow};
                  }
                  .map-groups-rooms g text,
                  .map-groups-rooms g span,
                  .map-groups-rooms g path {
                    stroke:#ffffff !important;
                    stroke-width: 0.1 !important;
                    fill: #ffffff !important;
                    color: #ffffff !important;
                    font: 11px sans-serif;
                    text-rendering: optimizeSpeed !important;
                    pointer-events: none;
                    
                  }
                  .map-groups-rooms g line:hover,
                  .map-groups-rooms g polygon:hover,
                  .map-groups-rooms g polyline:hover {
                    // fill:#62cf6b !important;
                    opacity: 0.75;
                    filter: ${dropShadow};
                  }
                  .map-groups-techs polygon,
                  .map-groups-techs polyline {
                    stroke:${strokeColor};
                    fill:#bfbfbf;
                    pointer-events: none;
                    filter: ${dropShadow};
                  }
                  .map-groups-techs-icon path:nth-child(1) {
                    fill: #007aff;
                  }
                  .map-groups-techs-icon path:nth-child(2) {
                    fill: #fff;
                  }
                  .map-groups-wcs polyline {
                    stroke:${strokeColor};
                    fill:#ac7ab6;
                    pointer-events: none;
                  }
                  .map-groups-wcs-icon path:nth-child(1) {
                    fill: #007aff;
                  }
                  .map-groups-wcs-icon path:nth-child(2) {
                    fill: #fff;
                  }
                  .map-groups-escapes polygon,
                  .map-groups-escapes polyline {
                    stroke:${strokeColor};
                    fill:#bfbfbf;
                    pointer-events: none;
                  }
                  .map-groups-escapes-icon path:nth-child(1) {
                    fill: #009245;
                  }
                  .map-groups-escapes-icon path:nth-child(2) {
                    fill: #fff;
                  }
                  .room-map-group-search-target,
                  .room-map-group-search-target line,
                  .room-map-group-search-target polygon,
                  .room-map-group-search-target polyline {
                    fill:#62cf6b !important;
                  }
                  .room-pulse {
                    animation: pulse 1.2s ease-out 1;
                  }
                  @keyframes pulse {
                    0% { filter: drop-shadow(0 0 0 rgba(98,207,107,0)); }
                    50% { filter: drop-shadow(0 0 12px rgba(98,207,107,0.75)); }
                    100% { filter: drop-shadow(0 0 0 rgba(98,207,107,0)); }
                  }
                  .map-groups-walls path,
                  .map-groups-walls polyline,
                  .map-groups-walls polygon,
                  .map-groups-walls rect,
                  .map-groups-walls line {
                    stroke:${strokeColor};
                    fill: ${backgroundColor};
                  }
                  .map-groups-void path,
                  .map-groups-void polyline,
                  .map-groups-void polygon,
                  .map-groups-void rect,
                  .map-groups-void line {
                    stroke:${strokeColor};
                    fill: ${useColorModeValue("#ffffff", "#1a202c")};
                  }
                  .map-groups-coworking-atameken path,
                  .map-groups-coworking-atameken polygon, 
                  .map-groups-coworking-atameken polyline {
                    stroke:${strokeColor};
                    fill:${backgroundColor};
                    filter: ${dropShadow};
                  }
                  .label-huge {
                    fill:${strokeColor} !important;
                    color:${strokeColor}!important;
                    stroke-width: 0.1 !important
                  }
                  .label {
                    fill:#ffffff !important;
                    color:#ffffff !important;
                    stroke-width: 0.1 !important
                  }
                  .label-white {
                    fill:#ffffff !important;
                    color:#ffffff !important;
                    stroke-width: 0.1 !important
                  }
                  .map-groups-rooms-vk g line,
                  .map-groups-rooms-vk g polygon,
                  .map-groups-rooms-vk g polyline {
                    stroke:${strokeColor};
                    fill:#61a166;
                    filter: ${dropShadow};
                  }
                  .map-groups-rooms-vk g text,
                  .map-groups-rooms-vk g span,
                  .map-groups-rooms-vk g path {
                    stroke:#ffffff !important;
                    stroke-width: 0.1 !important;
                    fill: #ffffff !important;
                    color: #ffffff !important;
                    font: 11px sans-serif !important;
                    text-rendering: optimizeSpeed !important;
                    pointer-events: none;
                  }
                  .fit-text {
                    font: 9px sans-serif !important;
                  }
                `}
            </style>
          </defs>
          <Wallpaper />
          {children}
          <IconsCommon />
        </svg>
        <Flex position="absolute" right="16px" bottom="16px" gap="8px" direction="column" align="flex-end">
          <Button
            size="xs"
            h="28px"
            px="10px"
            bg={useColorModeValue("#edf2f7", "#242a36")}
            _hover={{ bg: "#ffffff5e" }}
            onClick={async () => {
              try {
                const url = window.location.href;
                await navigator.clipboard.writeText(url);
                toast({
                  title: "Link copied",
                  status: "success",
                  duration: 1800,
                  isClosable: true,
                  position: "bottom",
                });
              } catch (e) {
                toast({
                  title: "Could not copy",
                  status: "error",
                  duration: 2000,
                  isClosable: true,
                  position: "bottom",
                });
              }
            }}
          >
            <Text fontSize="xs">share</Text>
          </Button>
          <IconButton aria-label="Reset view" size="sm" onClick={() => {
            try { panZoomApi?.resetTransform?.(); } catch (e) {}
          }}>
            ⤢
          </IconButton>
        </Flex>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default MapLayout;
