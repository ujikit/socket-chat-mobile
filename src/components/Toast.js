import { Toast } from 'native-base'

export function ToastComponent(message) {
	return Toast.show({ text: `${message}`, duration: 5000, textStyles: { fontSize: 9 },
		buttonTextStyle: { color: 'white' }, buttonStyle: { backgroundColor: "#d71149" }, buttonText: 'Ok' })
}
