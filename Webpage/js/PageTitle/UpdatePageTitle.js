function UpdatePageTitle(data) {
	var DataName = data[0], DataV = data[1], DataPV = data[2], DataPNum = data[3], DataPMax = data[5], DataGMode = data[6], DataWMode = data[7]
	document.title = SimpleReplace(SimpleReplace(SimpleReplace(SimpleReplace(SimpleReplace(SimpleReplace(SimpleReplace(GetPageTitle(), "{N}", DataName), "{V}", DataV), "{PV}", DataPV), "{PNum}", DataPNum), "{PMax}", DataPMax), "{GM}", DataGMode), "{WM}", DataWMode)
}