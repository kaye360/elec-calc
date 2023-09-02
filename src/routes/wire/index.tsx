'use client'
import React from "react";
import PageHeading from "../../components/PageHeading";
import SubCategoryButton from "../../components/SubCategoryButton";
import SubCategoryList from "../../components/SubCategoryList";
import Main from "../../layout/Main";


export default function Wire() {
    return (
        <Main>
            <PageHeading>Wire</PageHeading>

            <SubCategoryList>
                <SubCategoryButton href="/wire/voltage-drop">Voltage Drop</SubCategoryButton>
                <SubCategoryButton href="/wire/ampacity">Ampacity</SubCategoryButton>
                <SubCategoryButton href="/wire/pricing">Pricing</SubCategoryButton>
            </SubCategoryList>

        </Main>
    )
}