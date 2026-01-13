import { View, Text, TouchableOpacity } from "react-native";

interface IMyButtonProps {
    order?: number;
    children?: React.ReactNode;
    onPress?: () => void;
}

export const MyButton = (props: IMyButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
        <View>  
           {props.children ?? <Text>My Button {props.order}</Text>}
        </View>
        </TouchableOpacity>
        );
}