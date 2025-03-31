

interface ExtendedDeviceOrientationEvent extends DeviceOrientationEvent {
    requestPermission?: () => Promise<'granted' | 'denied'>;
}

type DeviceOrientationEventType = {
    alpha: number;
    beta: number;
    gamma: number;
};

export const handleOrientation = (e: DeviceOrientationEventType): void => {       
    console.log(e);

    const alpha= e.alpha;
    const beta= e.beta;
    const gamma = e.gamma;

    const sCube = document.querySelector('.screenCube') as HTMLElement;

    // Update the cube's transform based on the orientation
    if (sCube) {
        sCube.style.transform = `rotateX(${beta}deg) rotateY(${gamma}deg) rotateZ(${alpha}deg)`;
    }
};

export const requestDeviceOrientation = async (orientationHandler: (e: DeviceOrientationEventType) => void): Promise<void> => {
    // if(typeof DeviceOrientationEvent != 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        // iOs 13+
        try {
            const permissionState = await (DeviceOrientationEvent as any).requestPermission();
            if (permissionState === 'granted') {
                window.addEventListener('deviceorientation', (e) => {
                    const event = e as DeviceOrientationEvent;
                    orientationHandler({
                        alpha: event.alpha || 0,
                        beta: event.beta || 0,
                        gamma: event.gamma || 0,
                    });
                });
            }
        } catch(error) {
            console.error('Error requesting permission for device orientation', error);
        }            
    } else if('DeviceOrientationEvent' in window) {
        // Not iOs 13+
        window.addEventListener('deviceorientation', (e) => {
            const event = e as DeviceOrientationEvent;
            orientationHandler({
                alpha: event.alpha || 0,
                beta: event.beta || 0,
                gamma: event.gamma || 0,
            });
        });
    } else {
        // If the function is not supported at all, alert
        alert('Device not supported');
    }
}

export const handleDoubleTap = (event: MouseEvent) => {
    alert('Doube tap detected');
}