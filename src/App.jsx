import '@/global.css'

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	Text,
	View,
} from 'react-native'

function App() {
	return (
		<SafeAreaView>
			<StatusBar />
			<ScrollView>
				<View className='flex justify-center items-center bg-black h-screen'>
					<Text className='text-green-800 text-5xl font-iceland'>Iceland</Text>
					<Text className='text-red-500 text-4xl font-quantico'>Quantico</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default App;
