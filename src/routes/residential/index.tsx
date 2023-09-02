import React from 'react'
import SubCategoryList from '../../components/SubCategoryList'
import SubCategoryButton from '../../components/SubCategoryButton'

export default function Residential() {
    return (
        <SubCategoryList>
            <SubCategoryButton href='/residential/checklist'>Checklist</SubCategoryButton>
            <SubCategoryButton href='/residential/service-mast'>Service Mast</SubCategoryButton>

        </SubCategoryList>
    )
}
