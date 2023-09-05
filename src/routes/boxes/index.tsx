import React from 'react'
import Main from '../../layout/Main'
import PageHeading from '../../components/PageHeading'
import SubCategoryList from '../../components/SubCategoryList'
import { SubmitButton } from '../../components/FormElements'
import SubCategoryButton from '../../components/SubCategoryButton'

export default function Boxes() {
    return (
        <Main>
            <PageHeading>
                Boxes
            </PageHeading>

            <SubCategoryList>
                <SubCategoryButton href="/boxes/fill" comingSoon>Box Fill</SubCategoryButton>
            </SubCategoryList>
        </Main>
    )
}
