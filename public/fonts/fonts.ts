import localFont from 'next/font/local';

const RobotoRegular = localFont({
    src: [
        {
            path: '../../public/fonts/roboto/static/Roboto-Regular.ttf',
            fontStyle: 'normal',
        }
    ],
    fontWeight: 400,
    display: 'swap',
    variable: '--font-roboto-regular',
})

const RobotoThin = localFont({
    src: [
        {
            path: '../../public/fonts/roboto/static/Roboto-Thin.ttf',
            fontStyle: 'normal',
        }
    ],
    fontWeight: 100,
    display: 'swap',
    variable: '--font-roboto-thin',
})

const RobotoBold = localFont({
    src: [
        {
            path: '../../public/fonts/roboto/static/Roboto-Bold.ttf',
            fontStyle: 'normal',
        }
    ],
    fontWeight: 'bold',
    display: 'swap',
    variable: '--font-roboto-bold',
})

export {
    RobotoRegular,
    RobotoThin,
    RobotoBold,
}