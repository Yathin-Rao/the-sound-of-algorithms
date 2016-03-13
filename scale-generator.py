# coding: utf-8
notes = ['C0','C#0','D0','D#0','E0','F0','F#0','G0','G#0','A0','A#0','B0','C1','C#1','D1','D#1','E1','F1','F#1','G1','G#1','A1','A#1','B1','C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2','C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6','C#6','D6','D#6','E6','F6','F#6','G6','G#6','A6','A#6','B6','C7','C#7','D7','D#7','E7','F7','F#7','G7','G#7','A7','A#7','B7','C8','C#8','D8','D#8','E8','F8','F#8','G8','G#8','A8','A#8','B8']

formulas = {}
formulas['major'] = [2,2,1,2,2,2,1]
formulas['minor'] = [2,1,2,2,1,2,2]
formulas['pent_minor'] = [3,2,2,3,2]
formulas['harm_minor'] = [2,1,2,2,1,3,1]
formulas['dorian'] = [2,1,2,2,2,1,2]
formulas['mixolydian'] = [2,2,1,2,2,1,2]

def generate_scale(scale,root):
    root = root.upper()
    if scale not in formulas.keys():
        print("Scale not found")
        exit(0)
    if root not in ['A','B','C','D','E','F','G']:
        print("Root not found")
        exit(0)
    note_index = 0
    nxt = 0
    while True:
        if root not in notes[note_index]:
            note_index += 1
        else:
            break
    scale_notes = []
    while note_index < len(notes):
        scale_notes.append(notes[note_index])
        note_index += formulas[scale][nxt]
        nxt = (nxt+1)%len(formulas[scale])        
    print(scale_notes)

generate_scale('minor','a')
generate_scale('major','g')
generate_scale('major','d')
