import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        color: {control: 'select'},
    }
} as ComponentMeta<typeof MyLabel>

const Template:ComponentStory<typeof MyLabel> = (args)=> <MyLabel {...args}/>

export const basic = Template.bind({});
        basic.args = {
            size: 'h1',
            label: 'este es el h1',
            allCaps: false,
        }
export const AllCaps = Template.bind({});
        AllCaps.args = {
            size: 'normal',
            allCaps: true,
        }

export const Secondary = Template.bind({});
        Secondary.args = {
            size: 'normal',
            color: 'secondary'
        }
export const Tertiary = Template.bind({});
        Tertiary.args = {
            size: 'normal',
            color: 'tertiary'
        }

export const CustomFontColor = Template.bind({});
        CustomFontColor.args = {
            size: 'h1',
            fontColor: '#5517ac' 
        }

export const CustomBackgroundColor = Template.bind({});
        CustomBackgroundColor.args = {
            size: 'h1',
            fontColor: '#eeee',
            backgroundColor: '#000000' 
        }