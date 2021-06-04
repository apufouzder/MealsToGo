import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.components";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";


const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    }
})``;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const Loading = styled(ActivityIndicator)`
    
`;

export const RestaurantsScreen = () => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    console.log(error);
    return (
        <SafeArea>
            { isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.orange300} />
                </LoadingContainer>
            )}
            <Search />
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <Spacer position="bottom" size="large">
                            <RestaurantInfoCard restaurant={item} />
                        </Spacer>
                    );
                }}
                keyExtractor={(item) => item.name}
            />

        </SafeArea>
    );
};
