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
                <span>Coming Soon</span>
                <SubCategoryButton href="/boxes/fill">Box Fill</SubCategoryButton>
            </SubCategoryList>
        </Main>
    )
}
