import React from "react";
import Main from "../../components/Main";
import PageHeading from "../../components/PageHeading";
import SubCategoryButton from "../../components/SubCategoryButton";
import SubCategoryList from "../../components/SubCategoryList";

export default function Conduit() {
    return (
        <Main>
            <PageHeading>Conduit</PageHeading>

            <SubCategoryList>
                <SubCategoryButton href="/conduit/fill">Fill</SubCategoryButton>
                <SubCategoryButton href="/conduit/bend-calculations">Bend Calculations</SubCategoryButton>
            </SubCategoryList>
        </Main>
    )
}