import { useState, useEffect } from 'react';
import { BeanHead } from 'beanheads';
import useWindowSize from '../hooks/useWindowSize';

const avatars = {
  Fre: {
    body: 'chest',
    circleColor: 'blue',
    eyebrows: 'angry',
    eyes: 'wink',
    facialHair: 'mediumBeard',
    hair: 'short',
    hairColor: 'black',
    lashes: 'false',
    lipColor: 'purple',
    mouth: 'open',
    skinTone: 'black',
  },
  Yos: {
    body: 'chest',
    circleColor: 'blue',
    eyebrows: 'angry',
    eyes: 'wink',
    facialHair: 'mediumBeard',
    hair: 'short',
    hairColor: 'black',
    lashes: 'false',
    lipColor: 'purple',
    mask: 'true',
    faceMask: 'true',
    mouth: 'open',
    skinTone: 'yellow',
  },
  Mili: {
    body: 'chest',
    circleColor: 'blue',
    eyebrows: 'angry',
    eyes: 'wink',
    facialHair: 'mediumBeard',
    hair: 'short',
    hairColor: 'pink',
    lashes: 'false',
    lipColor: 'purple',
    mouth: 'open',
    skinTone: 'brown',
  },
};

function AvatarByWindowSize() {
  const { width } = useWindowSize();
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState('');
  
  useEffect(() => {
    let chosenAvatar;
    if (width > 1000) {
      chosenAvatar = avatars.Fre;
      setName('Fre')
    } else if (width < 700) {
      chosenAvatar = avatars.Mili;
      setName('Mili')
    } else {
      chosenAvatar = avatars.Yos;
      setName('Yos')
    }

    const randomProperties = {
      hat: Math.random() < 0.5 ? 'none' : 'beanie',
      hatColor: Math.random() < 0.5 ? 'black' : 'red',
      accessory: Math.random() < 0.5 ? 'none' : 'glasses',
      clothing: Math.random() < 0.5 ? 'tshirt' : 'shirt',
      clothingColor: Math.random() < 0.5 ? 'blue' : 'green',
      graphic: Math.random() < 0.5 ? 'none' : 'star',
    }

    setAvatar(chosenAvatar, randomProperties);
  }, [width]);

  if (!avatar) {
    return null; // return null if avatar is not yet determined
  }

  return (
    <div>
      {avatar && name && <div className='beanWrapper'>
        <p>My name is {name} and you're looking at me because your screen size is {width}</p>
        <BeanHead {...avatar} />
        </div>
      }
    </div>
  );
}

export default AvatarByWindowSize;
