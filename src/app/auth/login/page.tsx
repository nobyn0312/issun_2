import { Container } from '@/components/features/container'
import { ContentsWrapper } from '@/components/shared/Wrapper/contents-wrapper'
import React from 'react'

const page = () => {
  return (
    <>
    <Container>
      <ContentsWrapper variant="default">
      <p className='text-sm font-bold'>Review Edit</p>
      <h2 className='text-xl font-bold mb-3'>レビュー編集</h2>
      </ContentsWrapper>
    </Container>
    </>
  )
}

export default page