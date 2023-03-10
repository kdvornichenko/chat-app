import { useState } from 'react'
import {
	MultiChatSocket,
	MultiChatWindow,
	useMultiChatLogic,
} from 'react-chat-engine-advanced'

import CustomHeader from '@/components/CustomHeader/CustomHeader'
import Ai from '@/components/CustomMessageForms/Ai'
import StandartMessageForm from '@/components/CustomMessageForms/StandartMessageForm'

const Chat = ({ user, secret }) => {
	const chatProps = useMultiChatLogic(
		import.meta.env.VITE_PROJECT_ID,
		user,
		secret
	)

	const [settings, setSettings] = useState(false)

	return (
		<div
			className={settings ? 'settings' : ''}
			style={{ flexBasis: '100%', fontFamily: 'Rubick' }}
		>
			<MultiChatSocket {...chatProps} />

			<MultiChatWindow
				{...chatProps}
				style={{ height: '100vh' }}
				renderChatHeader={(chat) => (
					<CustomHeader
						chat={chat}
						settings={settings}
						setSettings={setSettings}
					/>
				)}
				renderMessageForm={(props) => {
					if (chatProps.chat?.title.startsWith('AIChat_')) {
						return <Ai props={props} activeChat={chatProps.chat} />
					}

					return (
						<StandartMessageForm props={props} activeChat={chatProps.chat} />
					)
				}}
			/>
		</div>
	)
}

export default Chat
