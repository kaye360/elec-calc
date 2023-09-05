import React from 'react'
import SubCategoryList from '../../components/SubCategoryList'
import SubCategoryButton from '../../components/SubCategoryButton'
import Main from '../../layout/Main'

export default function index() {
    return (
        <Main>
            <SubCategoryList>
                <span>Coming Soon</span>
                <SubCategoryButton href="/receptacles/twist-lock">Twist-Lock Reference</SubCategoryButton>
            </SubCategoryList>
        </Main>
    )
}
