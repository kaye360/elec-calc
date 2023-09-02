import React from 'react'
import SubCategoryList from '../../components/SubCategoryList'
import SubCategoryButton from '../../components/SubCategoryButton'
import Main from '../../layout/Main'

export default function Residential() {
    return (
        <Main>
            <SubCategoryList>
                <SubCategoryButton href='/residential/checklist'>Checklist</SubCategoryButton>
                <SubCategoryButton href='/residential/service-mast'>Service Mast</SubCategoryButton>

            </SubCategoryList>
        </Main>
    )
}
