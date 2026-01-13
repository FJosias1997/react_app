import { View, Text } from "react-native";

interface IFirstComponentProps {
    order?: number;
}

export const FirstComponent = (props: IFirstComponentProps) => {

    return (
        <View>  
            <Text>First Component {props.order}</Text>
        </View>);
}