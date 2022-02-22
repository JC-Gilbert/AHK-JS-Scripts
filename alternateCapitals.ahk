#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
SendMode Event  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir% ; Ensures a consistent starting directory.
#SingleInstance force
#Persistent
#InstallKeybdHook

Numpad0::
{
	Send, ^+{home}
	Sleep, 10
	Send, ^x
	ClipWait
	Sleep, 10
	
	clipboard := clipboard
	StringLower, clipboard, clipboard
	counter := 1
	
	Loop, Parse, clipboard
	{
		charToSend = %A_LoopField%
		
		if Mod(counter, 2) = 0
		{
			StringUpper, charToSend, charToSend
		}
		
		if !charToSend
		{
			Send, {Space}
		}
		else
		{
			Send, %charToSend%
			counter++
		}
	}
}
