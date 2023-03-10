import { ChatBubbleLeftRightIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { FcSettings } from 'react-icons/fc'

const CustomHeader = ({ chat, settings, setSettings }) => {
	return (
		<div className="chat-header">
			<div className="flexbetween">
				<ChatBubbleLeftRightIcon className="icon-chat" />
				<h3 className="header-text">{chat.title}</h3>
			</div>
			<div className="flexbetween">
				<PhoneIcon className="icon-phone" />
				<p className="header-text">
					{chat.description !== '⬅️ ⬅️ ⬅️'
						? chat.description
						: 'No chat selected'}
				</p>
			</div>
			<button className="chat-settings-button" onClick={() => setSettings(!settings)}>
				<FcSettings className='icon-settings' />
			</button>
		</div>
	)
}

export default CustomHeader
