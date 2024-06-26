import localFont from 'next/font/local';

const RobotoRegular = localFont({
    src: [
        {
            path: '../../public/fonts/roboto/static/Roboto-Regular.ttf',
        }
    ],
    style: 'normal',
    weight: '400',
    display: 'swap',
    variable: '--font-roboto-regular',
})

const RobotoThin = localFont({
    src: [
        {
            path: '../../public/fonts/roboto/static/Roboto-Thin.ttf',
        }
    ],
    style: 'normal',
    weight: '100',
    display: 'swap',
    variable: '--font-roboto-thin',
})

const RobotoBold = localFont({
    src: [
        {
            path: '../../public/fonts/roboto/static/Roboto-Bold.ttf',
        }
    ],
    style: 'normal',
    weight: 'bold',
    display: 'swap',
    variable: '--font-roboto-bold',
})

export {
    RobotoRegular,
    RobotoThin,
    RobotoBold,
}
