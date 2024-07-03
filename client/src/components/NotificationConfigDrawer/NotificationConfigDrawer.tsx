"use client";

import { useState, useEffect } from "react";

interface NotificationConfigDrawerProps {
    isOpen: boolean;
}

export default function NotificationConfigDrawer({
    isOpen,
}: NotificationConfigDrawerProps) {
    const [shouldRender, setShouldRender] = useState(isOpen);
    const [channel, setChannel] = useState('Email');
    const [provider, setProvider] = useState('Gmail');
    const [topic, setTopic] = useState('General Notifications');

    useEffect(() => {
        if (isOpen) setShouldRender(true);
    }, [isOpen]);

    const onAnimationEnd = () => {
        if (!isOpen) setShouldRender(false);
    };

    

    return (
        shouldRender && (
            <div
                className={`w-2/12 bg-teal-800 py-3 px-2 absolute right-0 h-full transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onAnimationEnd={onAnimationEnd}
            >
                <h2 className="text-lg p-1 font-semibold text-white mb-4">Configure</h2>
                <div className="space-y-4">
                    <div className="p-1 rounded-lg">
                        <label htmlFor="channel" className="block text-sm text-gray-300 mb-1">Channel</label>
                        <select 
                            id="channel" 
                            value={channel}
                            onChange={e => setChannel(e.target.value)}
                            className="w-full bg-gray-800 text-white rounded-md p-1.5"
                        >
                            <option>Email</option>
                            <option>SMS</option>
                            <option>Push Notification</option>
                        </select>
                    </div>
                    <div className="p-1 rounded-lg">
                        <label htmlFor="provider" className="block text-sm text-gray-300 mb-1">Provider</label>
                        <select 
                            id="provider" 
                            value={provider}
                            onChange={e => setProvider(e.target.value)}
                            className="w-full bg-gray-800 text-white rounded-md p-1.5"
                        >
                            <option>Gmail</option>
                            <option>Yahoo</option>
                            <option>Outlook</option>
                        </select>
                    </div>
                    <div className="p-1 rounded-lg">
                        <label htmlFor="topic" className="block text-sm text-gray-300 mb-1">Subscription Topic</label>
                        <select 
                            id="topic" 
                            value={topic}
                            onChange={e => setTopic(e.target.value)}
                            className="w-full bg-gray-800 text-white rounded-md p-1.5"
                        >
                            <option>General Notifications</option>
                            <option>Product Updates</option>
                            <option>New Arrivals</option>
                        </select>
                    </div>
                </div>

                <div className="h-px w-full my-2  border-t bg-[#DCDEE4]"></div>

                <h2 className="text-lg p-1 font-semibold text-white mb-4">Advanced</h2>

                <div className="p-1 rounded-lg">
                        <label htmlFor="topic" className="block text-sm text-gray-300 mb-1">templates</label>
                        <select 
                            id="topic" 
                            value={topic}
                            onChange={e => setTopic(e.target.value)}
                            className="w-full bg-gray-800 text-white rounded-md p-1.5"
                        >
                            <option>Onboarding 1</option>
                            <option>Warnning 1</option>
                            <option>Warnning 2</option>
                        </select>
                    </div>
                

            </div>

            
        )
    );
}