# coding: utf-8
notes = ['C0','C#0','D0','D#0','E0','F0','F#0','G0','G#0','A0','A#0','B0','C1','C#1','D1','D#1','E1','F1','F#1','G1','G#1','A1','A#1','B1','C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2','C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6','C#6','D6','D#6','E6','F6','F#6','G6','G#6','A6','A#6','B6','C7','C#7','D7','D#7','E7','F7','F#7','G7','G#7','A7','A#7','B7','C8','C#8','D8','D#8','E8','F8','F#8','G8','G#8','A8','A#8','B8']

formulas = {}
formulas['major'] = [2,2,1,2,2,2,1]
formulas['minor'] = [2,1,2,2,1,2,2]
formulas['pent_minor'] = [3,2,2,3,2]
formulas['harm_minor'] = [2,1,2,2,1,3,1]
formulas['dorian'] = [2,1,2,2,2,1,2]
formulas['mixolydian'] = [2,2,1,2,2,1,2]

flats = {'A#0': 'Bb0', 'A#1': 'Bb1', 'A#2': 'Bb2', 'A#3': 'Bb3', 'A#4': 'Bb4', 'A#5': 'Bb5', 'A#6': 'Bb6', 'A#7': 'Bb7', 'A#8': 'Bb8', 'C#0': 'Db0', 'C#1': 'Db1', 'C#2': 'Db2', 'C#3': 'Db3', 'C#4': 'Db4', 'C#5': 'Db5', 'C#6': 'Db6', 'C#7': 'Db7', 'C#8': 'Db8', 'D#0': 'Eb0', 'D#1': 'Eb1', 'D#2': 'Eb2', 'D#3': 'Eb3', 'D#4': 'Eb4', 'D#5': 'Eb5', 'D#6': 'Eb6', 'D#7': 'Eb7', 'D#8': 'Eb8', 'F#0': 'Gb0', 'F#1': 'Gb1', 'F#2': 'Gb2', 'F#3': 'Gb3', 'F#4': 'Gb4', 'F#5': 'Gb5', 'F#6': 'Gb6', 'F#7': 'Gb7', 'F#8': 'Gb8', 'G#0': 'Ab0', 'G#1': 'Ab1', 'G#2': 'Ab2', 'G#3': 'Ab3', 'G#4': 'Ab4', 'G#5': 'Ab5', 'G#6': 'Ab6', 'G#7': 'Ab7', 'G#8': 'Ab8'}

n2f = {'A#0': 29.14, 'A#1': 58.27, 'A#2': 116.54, 'A#3': 233.08, 'A#4': 466.16, 'A#5': 932.33, 'A#6': 1864.66, 'A#7': 3729.31, 'A#8': 7458.62, 'A0': 27.5, 'A1': 55.0, 'A2': 110.0, 'A3': 220.0, 'A4': 440.0, 'A5': 880.0, 'A6': 1760.0, 'A7': 3520.0, 'A8': 7040.0, 'Ab0': 25.96, 'Ab1': 51.91, 'Ab2': 103.83, 'Ab3': 207.65, 'Ab4': 415.3, 'Ab5': 830.61, 'Ab6': 1661.22, 'Ab7': 3322.44, 'Ab8': 6644.88, 'B0': 30.87, 'B1': 61.74, 'B2': 123.47, 'B3': 246.94, 'B4': 493.88, 'B5': 987.77, 'B6': 1975.53, 'B7': 3951.07, 'B8': 7902.13, 'Bb0': 29.14, 'Bb1': 58.27, 'Bb2': 116.54, 'Bb3': 233.08, 'Bb4': 466.16, 'Bb5': 932.33, 'Bb6': 1864.66, 'Bb7': 3729.31, 'Bb8': 7458.62, 'C#0': 17.32, 'C#1': 34.65, 'C#2': 69.3, 'C#3': 138.59, 'C#4': 277.18, 'C#5': 554.37, 'C#6': 1108.73, 'C#7': 2217.46, 'C#8': 4434.92, 'C0': 16.35, 'C1': 32.7, 'C2': 65.41, 'C3': 130.81, 'C4': 261.63, 'C5': 523.25, 'C6': 1046.5, 'C7': 2093.0, 'C8': 4186.01, 'D#0': 19.45, 'D#1': 38.89, 'D#2': 77.78, 'D#3': 155.56, 'D#4': 311.13, 'D#5': 622.25, 'D#6': 1244.51, 'D#7': 2489.02, 'D#8': 4978.03, 'D0': 18.35, 'D1': 36.71, 'D2': 73.42, 'D3': 146.83, 'D4': 293.66, 'D5': 587.33, 'D6': 1174.66, 'D7': 2349.32, 'D8': 4698.63, 'Db0': 17.32, 'Db1': 34.65, 'Db2': 69.3, 'Db3': 138.59, 'Db4': 277.18, 'Db5': 554.37, 'Db6': 1108.73, 'Db7': 2217.46, 'Db8': 4434.92, 'E0': 20.6, 'E1': 41.2, 'E2': 82.41, 'E3': 164.81, 'E4': 329.63, 'E5': 659.25, 'E6': 1318.51, 'E7': 2637.02, 'E8': 5274.04, 'Eb0': 19.45, 'Eb1': 38.89, 'Eb2': 77.78, 'Eb3': 155.56, 'Eb4': 311.13, 'Eb5': 622.25, 'Eb6': 1244.51, 'Eb7': 2489.02, 'Eb8': 4978.03, 'F#0': 23.12, 'F#1': 46.25, 'F#2': 92.5, 'F#3': 185.0, 'F#4': 369.99, 'F#5': 739.99, 'F#6': 1479.98, 'F#7': 2959.96, 'F#8': 5919.91, 'F0': 21.83, 'F1': 43.65, 'F2': 87.31, 'F3': 174.61, 'F4': 349.23, 'F5': 698.46, 'F6': 1396.91, 'F7': 2793.83, 'F8': 5587.65, 'G#0': 25.96, 'G#1': 51.91, 'G#2': 103.83, 'G#3': 207.65, 'G#4': 415.3, 'G#5': 830.61, 'G#6': 1661.22, 'G#7': 3322.44, 'G#8': 6644.88, 'G0': 24.5, 'G1': 49.0, 'G2': 98.0, 'G3': 196.0, 'G4': 392.0, 'G5': 783.99, 'G6': 1567.98, 'G7': 3135.96, 'G8': 6271.93, 'Gb0': 23.12, 'Gb1': 46.25, 'Gb2': 92.5, 'Gb3': 185.0, 'Gb4': 369.99, 'Gb5': 739.99, 'Gb6': 1479.98, 'Gb7': 2959.96, 'Gb8': 5919.91}

#This should be unused
#sharps = {'Ab0': 'G#0', 'Ab1': 'G#1', 'Ab2': 'G#2', 'Ab3': 'G#3', 'Ab4': 'G#4', 'Ab5': 'G#5', 'Ab6': 'G#6', 'Ab7': 'G#7', 'Ab8': 'G#8', 'Bb0': 'A#0', 'Bb1': 'A#1', 'Bb2': 'A#2', 'Bb3': 'A#3', 'Bb4': 'A#4', 'Bb5': 'A#5', 'Bb6': 'A#6', 'Bb7': 'A#7', 'Bb8': 'A#8', 'Db0': 'C#0', 'Db1': 'C#1', 'Db2': 'C#2', 'Db3': 'C#3', 'Db4': 'C#4', 'Db5': 'C#5', 'Db6': 'C#6', 'Db7': 'C#7', 'Db8': 'C#8', 'Eb0': 'D#0', 'Eb1': 'D#1', 'Eb2': 'D#2', 'Eb3': 'D#3', 'Eb4': 'D#4', 'Eb5': 'D#5', 'Eb6': 'D#6', 'Eb7': 'D#7', 'Eb8': 'D#8', 'Gb0': 'F#0', 'Gb1': 'F#1', 'Gb2': 'F#2', 'Gb3': 'F#3', 'Gb4': 'F#4', 'Gb5': 'F#5', 'Gb6': 'F#6', 'Gb7': 'F#7', 'Gb8': 'F#8'}

sharps = {'Ab': 'G#', 'Bb': 'A#', 'Db': 'C#', 'Eb': 'D#', 'Gb': 'F#'}

def sharp_to_flat(notes):
    return list(map(lambda note: note if '#' not in note else flats[note], notes))

import re
def generate_scale(scale,root):
    originally_flat = False
    root = root[0].upper()+root[1:]
    if scale not in formulas.keys():
        print("Scale not found")
        exit(0)

    if not re.match('^[A-G][#b]?$',root):
        print("Root not found")
        exit(0)

    if 'b' in root:
        originally_flat = True
        root = sharps[root]

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
 
    return sharp_to_flat(scale_notes) if originally_flat else scale_notes

#tests
import sys
if len(sys.argv) < 3:
    print('''Usage:\n
            python3 scale-generator.py type_of_scale root_note\n
            type_of_scale: one of ['pent_minor', 'harm_minor', 'minor', 'dorian', 'major', 'mixolydian']
            root_note:     A-G[b|#] (Cb and Fb are not yet supported)
          ''')
    exit(0)
notes = generate_scale(sys.argv[1],sys.argv[2])
print("Notes:")
print(notes)
print("Frequencies:")
print(list(map(lambda note: n2f[note],notes)))
'''
print("A minor")
print(generate_scale('minor','a'))
print("C major")
print(generate_scale('major','c'))
print("Bb major")
print(generate_scale('major','Bb'))
print("G minor pentatonic")
print(generate_scale('pent_minor','G'))
print("F# harmonic minor")
print(generate_scale("harm_minor",'F#'))
print("A dorian")
print(generate_scale("dorian",'A'))
print("A mixolydian")
print(generate_scale("mixolydian",'A'))
'''
