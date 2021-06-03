import React from "react";
import styled from "styled-components/native";
import { StatusBar, FlatList, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import { Spacer } from "../../../components/spacer/spacer.components";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <FlatList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 },
                    { name: 10 },
                ]}
                renderItem={() => (
                    <Spacer position="bottom" size="large">
                        <RestaurantInfoCard />
                    </Spacer>
                )}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />

        </SafeArea>
    );
};
