import React from "react";

export default function InteractiveCard({ children, contentName }: { children: React.ReactNode, contentName: string }) {
    function onCarSelected() {
        window.location.href = `/dentists/${contentName}`; // Use window.location for client-side navigation
    }

    function onCardMouseAction(event: React.SyntheticEvent) {
        if (event.type === 'mouseover') {
            event.currentTarget.classList.remove('shadow-lg');
            event.currentTarget.classList.add('shadow-2xl');
        } else {
            event.currentTarget.classList.remove('shadow-2xl');
            event.currentTarget.classList.add('shadow-lg');
        }
    }

    return (
        <div className='w-1/6 h-[400px] rounded-lg shadow-lg bg-white pb-[50px]'
            onClick={onCarSelected}
            onMouseOver={(e) => onCardMouseAction(e)}
            onMouseOut={(e) => onCardMouseAction(e)}>
            {children}
        </div>
    )
}
