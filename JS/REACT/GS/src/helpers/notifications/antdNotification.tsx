import { notification, Alert } from 'antd';

notification.config({
    // placement: 'bottomRight',
    duration: 3,
});

export const antdNotification = (nType: string, nDescription: string) => {
    notification.open({
        message: nType,
        description: (<Alert message={nDescription} type="error" />),
    });
};