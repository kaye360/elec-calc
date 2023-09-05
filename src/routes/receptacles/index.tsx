import React from 'react'
import SubCategoryList from '../../components/SubCategoryList'
import SubCategoryButton from '../../components/SubCategoryButton'
import Main from '../../layout/Main'

export default function index() {
    return (
        <Main>
            <SubCategoryList>
                <SubCategoryButton href="/receptacles/twist-lock" comingSoon>Twist-Lock Reference</SubCategoryButton>
            </SubCategoryList>
        </Main>
    )
}
