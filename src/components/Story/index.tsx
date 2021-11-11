import React from 'react'
import {
  StoryContainer,
  UserListWrapper,
  UserProfileWrapper,
  UserPhotoWrapper,
  ColorSection,
  UserInfoWrapper
} from './styles'

export const Story = () => {
  const userList = [
    { id: 1, name: '1', url: 'assets/images/user1.png', color: '#3248', type: 'common', sex: 'female', typeColor: '#F9D054', sexColor: '#F88771' },
    { id: 2, name: '2', url: 'assets/images/user2.png', color: '#3248', type: 'rare', sex: 'male', typeColor: '#E44DFF', sexColor: '#58B4F6' },
    { id: 3, name: '3', url: 'assets/images/user3.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#58B4F6' },
    { id: 4, name: '4', url: 'assets/images/user4.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#58B4F6' },
    { id: 5, name: '5', url: 'assets/images/user1.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#58B4F6' },
    { id: 6, name: '6', url: 'assets/images/user2.png', color: '#3248', type: 'common', sex: 'male', typeColor: '#F9D054', sexColor: '#58B4F6' },
  ]
  return (
    <StoryContainer id='story'>
      <div className='main-layout'>
        <div className='main-container'>  
          <h1>Story</h1>
          <p>Thousands of years ago in this huge universe a happy planet belonged to mysterious Kitties, a planet that is full of life and joy. It was a precious homeland that kitties adored with all their heart but it did not last long.</p>
          <UserListWrapper>
            {userList.map((user, i) => (
                <UserProfileWrapper key={i}>
                  <UserPhotoWrapper>
                    <img src={user.url} alt={user.name} />
                    <ColorSection>
                      <p>{user.color}</p>
                    </ColorSection>
                  </UserPhotoWrapper>
                  <UserInfoWrapper>
                    <div style={{ background: user.typeColor }}>{user.type}</div>
                    <div style={{ background: user.sexColor }}>{user.sex}</div>
                  </UserInfoWrapper>
                </UserProfileWrapper>
              ))}
          </UserListWrapper>
          <p>Their planet was about to suffer from a terrible invasion that was about to happen. Monstrous beings made these heart-filled kitties abandon their homeland for the sake of survival. The broken kitties full of vengeance promised themselves that they would conquer all of the galaxy one day. Therefore, after a long time a unique planet has caught their special attention to begin.</p>
        </div>
      </div>
    </StoryContainer>
  )
}