import logo from './logo.png'
import profile_icon from './profile_icon.png'
import upload_area from './upload_area.jpeg'
import placeholder_image_1 from './placeholder_image_1.jpg'
import placeholder_image_2 from './placeholder_image_2.jpg'
import placeholder_image_3 from './placeholder_image_3.jpg'
import placeholder_image_4 from './placeholder_image_4.jpg'
import placeholder_image_5 from './placeholder_image_5.jpg'
import placeholder_image_6 from './placeholder_image_6.jpeg'

export const list_of_heroes = [
    {
        hero_name: "Alex",
        hero_image: placeholder_image_1
    },
    {
        hero_name: "Bianca",
        hero_image: placeholder_image_5
    },
    {
        hero_name: "Charlie",
        hero_image: placeholder_image_4
    },
    {
        hero_name: "David",
        hero_image: placeholder_image_6
    },
    {
        hero_name: "Evelyn",
        hero_image: placeholder_image_3
    },
    {
        hero_name: "Frank",
        hero_image: placeholder_image_1
    },
    {
        hero_name: "Grace",
        hero_image: placeholder_image_5
    },
    {
        hero_name: "Hannah",
        hero_image: placeholder_image_3
    },
    {
        hero_name: "Isaac",
        hero_image: placeholder_image_2
    },
    {
        hero_name: "Jack",
        hero_image: placeholder_image_4
    }
]

export const getHeroImage = (heroName) => {
    const hero = list_of_heroes.find(h => h.hero_name === heroName);
    return hero ? hero.hero_image : null;
};

export const assets = {
    logo,
    profile_icon,
    upload_area
}