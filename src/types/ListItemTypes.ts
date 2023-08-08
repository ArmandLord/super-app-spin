import { ImageRequireSource } from "react-native";

export interface ListItemProps {
    itemName: string,
    supportText: string,
    infoLabel: string,
    onPress: () => void,
    icon:{uri:string} | ImageRequireSource
  }
  