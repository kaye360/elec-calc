'use client'
import React from "react";
import Main from "../../components/Main";
import PageHeading from "../../components/PageHeading";
import SubCategoryButton from "../../components/SubCategoryButton";
import SubCategoryList from "../../components/SubCategoryList";


export default function Wire() {
    return (
        <Main>
            <PageHeading>Wire</PageHeading>

            <SubCategoryList>
                <SubCategoryButton href="/wire/voltage-drop">Voltage Drop</SubCategoryButton>
                <SubCategoryButton href="/wire/ampacity">Ampacity</SubCategoryButton>
            </SubCategoryList>

        </Main>
    )
}