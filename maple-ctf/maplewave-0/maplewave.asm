
maplewave:     file format elf64-x86-64


Disassembly of section .init:

0000000000001000 <.init>:
    1000:	48 83 ec 08          	sub    rsp,0x8
    1004:	48 8b 05 cd 3f 00 00 	mov    rax,QWORD PTR [rip+0x3fcd]        # 4fd8 <__gmon_start__>
    100b:	48 85 c0             	test   rax,rax
    100e:	74 02                	je     1012 <pa_simple_read@plt-0x1e>
    1010:	ff d0                	call   rax
    1012:	48 83 c4 08          	add    rsp,0x8
    1016:	c3                   	ret    

Disassembly of section .plt:

0000000000001020 <pa_simple_read@plt-0x10>:
    1020:	ff 35 e2 3f 00 00    	push   QWORD PTR [rip+0x3fe2]        # 5008 <main@@Base+0x3ea8>
    1026:	ff 25 e4 3f 00 00    	jmp    QWORD PTR [rip+0x3fe4]        # 5010 <main@@Base+0x3eb0>
    102c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]

0000000000001030 <pa_simple_read@plt>:
    1030:	ff 25 e2 3f 00 00    	jmp    QWORD PTR [rip+0x3fe2]        # 5018 <pa_simple_read@PULSE_0>
    1036:	68 00 00 00 00       	push   0x0
    103b:	e9 e0 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001040 <printf@plt>:
    1040:	ff 25 da 3f 00 00    	jmp    QWORD PTR [rip+0x3fda]        # 5020 <printf@GLIBC_2.2.5>
    1046:	68 01 00 00 00       	push   0x1
    104b:	e9 d0 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001050 <fseek@plt>:
    1050:	ff 25 d2 3f 00 00    	jmp    QWORD PTR [rip+0x3fd2]        # 5028 <fseek@GLIBC_2.2.5>
    1056:	68 02 00 00 00       	push   0x2
    105b:	e9 c0 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001060 <exit@plt>:
    1060:	ff 25 ca 3f 00 00    	jmp    QWORD PTR [rip+0x3fca]        # 5030 <exit@GLIBC_2.2.5>
    1066:	68 03 00 00 00       	push   0x3
    106b:	e9 b0 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001070 <pa_simple_free@plt>:
    1070:	ff 25 c2 3f 00 00    	jmp    QWORD PTR [rip+0x3fc2]        # 5038 <pa_simple_free@PULSE_0>
    1076:	68 04 00 00 00       	push   0x4
    107b:	e9 a0 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001080 <pa_simple_new@plt>:
    1080:	ff 25 ba 3f 00 00    	jmp    QWORD PTR [rip+0x3fba]        # 5040 <pa_simple_new@PULSE_0>
    1086:	68 05 00 00 00       	push   0x5
    108b:	e9 90 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001090 <getopt@plt>:
    1090:	ff 25 b2 3f 00 00    	jmp    QWORD PTR [rip+0x3fb2]        # 5048 <getopt@GLIBC_2.2.5>
    1096:	68 06 00 00 00       	push   0x6
    109b:	e9 80 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

00000000000010a0 <fopen@plt>:
    10a0:	ff 25 aa 3f 00 00    	jmp    QWORD PTR [rip+0x3faa]        # 5050 <fopen@GLIBC_2.2.5>
    10a6:	68 07 00 00 00       	push   0x7
    10ab:	e9 70 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

00000000000010b0 <fputc@plt>:
    10b0:	ff 25 a2 3f 00 00    	jmp    QWORD PTR [rip+0x3fa2]        # 5058 <fputc@GLIBC_2.2.5>
    10b6:	68 08 00 00 00       	push   0x8
    10bb:	e9 60 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

00000000000010c0 <cexpf@plt>:
    10c0:	ff 25 9a 3f 00 00    	jmp    QWORD PTR [rip+0x3f9a]        # 5060 <cexpf@GLIBC_2.2.5>
    10c6:	68 09 00 00 00       	push   0x9
    10cb:	e9 50 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

00000000000010d0 <fputs@plt>:
    10d0:	ff 25 92 3f 00 00    	jmp    QWORD PTR [rip+0x3f92]        # 5068 <fputs@GLIBC_2.2.5>
    10d6:	68 0a 00 00 00       	push   0xa
    10db:	e9 40 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

00000000000010e0 <strtol@plt>:
    10e0:	ff 25 8a 3f 00 00    	jmp    QWORD PTR [rip+0x3f8a]        # 5070 <strtol@GLIBC_2.2.5>
    10e6:	68 0b 00 00 00       	push   0xb
    10eb:	e9 30 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

00000000000010f0 <signal@plt>:
    10f0:	ff 25 82 3f 00 00    	jmp    QWORD PTR [rip+0x3f82]        # 5078 <signal@GLIBC_2.2.5>
    10f6:	68 0c 00 00 00       	push   0xc
    10fb:	e9 20 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001100 <fclose@plt>:
    1100:	ff 25 7a 3f 00 00    	jmp    QWORD PTR [rip+0x3f7a]        # 5080 <fclose@GLIBC_2.2.5>
    1106:	68 0d 00 00 00       	push   0xd
    110b:	e9 10 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001110 <pa_strerror@plt>:
    1110:	ff 25 72 3f 00 00    	jmp    QWORD PTR [rip+0x3f72]        # 5088 <pa_strerror@PULSE_0>
    1116:	68 0e 00 00 00       	push   0xe
    111b:	e9 00 ff ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001120 <fwrite@plt>:
    1120:	ff 25 6a 3f 00 00    	jmp    QWORD PTR [rip+0x3f6a]        # 5090 <fwrite@GLIBC_2.2.5>
    1126:	68 0f 00 00 00       	push   0xf
    112b:	e9 f0 fe ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001130 <perror@plt>:
    1130:	ff 25 62 3f 00 00    	jmp    QWORD PTR [rip+0x3f62]        # 5098 <perror@GLIBC_2.2.5>
    1136:	68 10 00 00 00       	push   0x10
    113b:	e9 e0 fe ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

0000000000001140 <fprintf@plt>:
    1140:	ff 25 5a 3f 00 00    	jmp    QWORD PTR [rip+0x3f5a]        # 50a0 <fprintf@GLIBC_2.2.5>
    1146:	68 11 00 00 00       	push   0x11
    114b:	e9 d0 fe ff ff       	jmp    1020 <pa_simple_read@plt-0x10>

Disassembly of section .plt.got:

0000000000001150 <__cxa_finalize@plt>:
    1150:	ff 25 a2 3e 00 00    	jmp    QWORD PTR [rip+0x3ea2]        # 4ff8 <__cxa_finalize@GLIBC_2.2.5>
    1156:	66 90                	xchg   ax,ax

Disassembly of section .text:

0000000000001160 <main@@Base>:
    1160:	41 55                	push   r13
    1162:	45 31 ed             	xor    r13d,r13d
    1165:	41 54                	push   r12
    1167:	4c 8d 25 da 1e 00 00 	lea    r12,[rip+0x1eda]        # 3048 <main@@Base+0x1ee8>
    116e:	55                   	push   rbp
    116f:	48 89 f5             	mov    rbp,rsi
    1172:	53                   	push   rbx
    1173:	89 fb                	mov    ebx,edi
    1175:	48 83 ec 08          	sub    rsp,0x8
    1179:	eb 25                	jmp    11a0 <main@@Base+0x40>
    117b:	0f 1f 44 00 00       	nop    DWORD PTR [rax+rax*1+0x0]
    1180:	83 f8 63             	cmp    eax,0x63
    1183:	75 55                	jne    11da <main@@Base+0x7a>
    1185:	48 8b 3d d4 3f 00 00 	mov    rdi,QWORD PTR [rip+0x3fd4]        # 5160 <optarg@GLIBC_2.2.5>
    118c:	ba 0a 00 00 00       	mov    edx,0xa
    1191:	31 f6                	xor    esi,esi
    1193:	e8 48 ff ff ff       	call   10e0 <strtol@plt>
    1198:	41 89 c5             	mov    r13d,eax
    119b:	83 f8 02             	cmp    eax,0x2
    119e:	77 3a                	ja     11da <main@@Base+0x7a>
    11a0:	4c 89 e2             	mov    rdx,r12
    11a3:	48 89 ee             	mov    rsi,rbp
    11a6:	89 df                	mov    edi,ebx
    11a8:	e8 e3 fe ff ff       	call   1090 <getopt@plt>
    11ad:	83 f8 ff             	cmp    eax,0xffffffff
    11b0:	75 ce                	jne    1180 <main@@Base+0x20>
    11b2:	83 eb 01             	sub    ebx,0x1
    11b5:	3b 1d 85 3f 00 00    	cmp    ebx,DWORD PTR [rip+0x3f85]        # 5140 <optind@GLIBC_2.2.5>
    11bb:	75 1d                	jne    11da <main@@Base+0x7a>
    11bd:	48 63 db             	movsxd rbx,ebx
    11c0:	44 89 ee             	mov    esi,r13d
    11c3:	48 8b 7c dd 00       	mov    rdi,QWORD PTR [rbp+rbx*8+0x0]
    11c8:	e8 73 05 00 00       	call   1740 <main@@Base+0x5e0>
    11cd:	48 83 c4 08          	add    rsp,0x8
    11d1:	31 c0                	xor    eax,eax
    11d3:	5b                   	pop    rbx
    11d4:	5d                   	pop    rbp
    11d5:	41 5c                	pop    r12
    11d7:	41 5d                	pop    r13
    11d9:	c3                   	ret    
    11da:	e8 f1 03 00 00       	call   15d0 <main@@Base+0x470>
    11df:	90                   	nop
    11e0:	31 ff                	xor    edi,edi
    11e2:	4c 8d 0d b7 3f 00 00 	lea    r9,[rip+0x3fb7]        # 51a0 <stderr@GLIBC_2.2.5+0x20>
    11e9:	41 b8 08 00 00 00    	mov    r8d,0x8
    11ef:	90                   	nop
    11f0:	31 d2                	xor    edx,edx
    11f2:	31 f6                	xor    esi,esi
    11f4:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    11f8:	89 d1                	mov    ecx,edx
    11fa:	89 f8                	mov    eax,edi
    11fc:	d3 f8                	sar    eax,cl
    11fe:	44 89 c1             	mov    ecx,r8d
    1201:	29 d1                	sub    ecx,edx
    1203:	83 e0 01             	and    eax,0x1
    1206:	83 c2 01             	add    edx,0x1
    1209:	d3 e0                	shl    eax,cl
    120b:	09 c6                	or     esi,eax
    120d:	83 fa 09             	cmp    edx,0x9
    1210:	75 e6                	jne    11f8 <main@@Base+0x98>
    1212:	48 63 f6             	movsxd rsi,esi
    1215:	66 41 89 3c 71       	mov    WORD PTR [r9+rsi*2],di
    121a:	83 c7 01             	add    edi,0x1
    121d:	81 ff 00 02 00 00    	cmp    edi,0x200
    1223:	75 cb                	jne    11f0 <main@@Base+0x90>
    1225:	c3                   	ret    
    1226:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    122d:	00 00 00 
    1230:	31 ed                	xor    ebp,ebp
    1232:	49 89 d1             	mov    r9,rdx
    1235:	5e                   	pop    rsi
    1236:	48 89 e2             	mov    rdx,rsp
    1239:	48 83 e4 f0          	and    rsp,0xfffffffffffffff0
    123d:	50                   	push   rax
    123e:	54                   	push   rsp
    123f:	4c 8d 05 6a 10 00 00 	lea    r8,[rip+0x106a]        # 22b0 <main@@Base+0x1150>
    1246:	48 8d 0d 03 10 00 00 	lea    rcx,[rip+0x1003]        # 2250 <main@@Base+0x10f0>
    124d:	48 8d 3d 0c ff ff ff 	lea    rdi,[rip+0xffffffffffffff0c]        # 1160 <main@@Base>
    1254:	ff 15 86 3d 00 00    	call   QWORD PTR [rip+0x3d86]        # 4fe0 <main@@Base+0x3e80>
    125a:	f4                   	hlt    
    125b:	0f 1f 44 00 00       	nop    DWORD PTR [rax+rax*1+0x0]
    1260:	48 8d 3d c9 3e 00 00 	lea    rdi,[rip+0x3ec9]        # 5130 <__bss_start@@Base>
    1267:	48 8d 05 c2 3e 00 00 	lea    rax,[rip+0x3ec2]        # 5130 <__bss_start@@Base>
    126e:	48 39 f8             	cmp    rax,rdi
    1271:	74 15                	je     1288 <main@@Base+0x128>
    1273:	48 8b 05 6e 3d 00 00 	mov    rax,QWORD PTR [rip+0x3d6e]        # 4fe8 <main@@Base+0x3e88>
    127a:	48 85 c0             	test   rax,rax
    127d:	74 09                	je     1288 <main@@Base+0x128>
    127f:	ff e0                	jmp    rax
    1281:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    1288:	c3                   	ret    
    1289:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    1290:	48 8d 3d 99 3e 00 00 	lea    rdi,[rip+0x3e99]        # 5130 <__bss_start@@Base>
    1297:	48 8d 35 92 3e 00 00 	lea    rsi,[rip+0x3e92]        # 5130 <__bss_start@@Base>
    129e:	48 29 fe             	sub    rsi,rdi
    12a1:	48 89 f0             	mov    rax,rsi
    12a4:	48 c1 ee 3f          	shr    rsi,0x3f
    12a8:	48 c1 f8 03          	sar    rax,0x3
    12ac:	48 01 c6             	add    rsi,rax
    12af:	48 d1 fe             	sar    rsi,1
    12b2:	74 14                	je     12c8 <main@@Base+0x168>
    12b4:	48 8b 05 35 3d 00 00 	mov    rax,QWORD PTR [rip+0x3d35]        # 4ff0 <main@@Base+0x3e90>
    12bb:	48 85 c0             	test   rax,rax
    12be:	74 08                	je     12c8 <main@@Base+0x168>
    12c0:	ff e0                	jmp    rax
    12c2:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    12c8:	c3                   	ret    
    12c9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    12d0:	80 3d b1 3e 00 00 00 	cmp    BYTE PTR [rip+0x3eb1],0x0        # 5188 <stderr@GLIBC_2.2.5+0x8>
    12d7:	75 2f                	jne    1308 <main@@Base+0x1a8>
    12d9:	55                   	push   rbp
    12da:	48 83 3d 16 3d 00 00 	cmp    QWORD PTR [rip+0x3d16],0x0        # 4ff8 <main@@Base+0x3e98>
    12e1:	00 
    12e2:	48 89 e5             	mov    rbp,rsp
    12e5:	74 0c                	je     12f3 <main@@Base+0x193>
    12e7:	48 8b 3d ca 3d 00 00 	mov    rdi,QWORD PTR [rip+0x3dca]        # 50b8 <main@@Base+0x3f58>
    12ee:	e8 5d fe ff ff       	call   1150 <__cxa_finalize@plt>
    12f3:	e8 68 ff ff ff       	call   1260 <main@@Base+0x100>
    12f8:	c6 05 89 3e 00 00 01 	mov    BYTE PTR [rip+0x3e89],0x1        # 5188 <stderr@GLIBC_2.2.5+0x8>
    12ff:	5d                   	pop    rbp
    1300:	c3                   	ret    
    1301:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    1308:	c3                   	ret    
    1309:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    1310:	e9 7b ff ff ff       	jmp    1290 <main@@Base+0x130>
    1315:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    131c:	00 00 00 
    131f:	90                   	nop
    1320:	c7 05 76 42 00 00 01 	mov    DWORD PTR [rip+0x4276],0x1        # 55a0 <stderr@GLIBC_2.2.5+0x420>
    1327:	00 00 00 
    132a:	c3                   	ret    
    132b:	0f 1f 44 00 00       	nop    DWORD PTR [rax+rax*1+0x0]
    1330:	c3                   	ret    
    1331:	66 66 2e 0f 1f 84 00 	data16 cs nop WORD PTR [rax+rax*1+0x0]
    1338:	00 00 00 00 
    133c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1340:	53                   	push   rbx
    1341:	48 89 fb             	mov    rbx,rdi
    1344:	ba 80 00 00 00       	mov    edx,0x80
    1349:	48 89 f7             	mov    rdi,rsi
    134c:	48 8b 0b             	mov    rcx,QWORD PTR [rbx]
    134f:	be 01 00 00 00       	mov    esi,0x1
    1354:	e8 c7 fd ff ff       	call   1120 <fwrite@plt>
    1359:	3d 80 00 00 00       	cmp    eax,0x80
    135e:	75 06                	jne    1366 <main@@Base+0x206>
    1360:	83 6b 10 80          	sub    DWORD PTR [rbx+0x10],0xffffff80
    1364:	5b                   	pop    rbx
    1365:	c3                   	ret    
    1366:	48 8d 3d 97 1c 00 00 	lea    rdi,[rip+0x1c97]        # 3004 <main@@Base+0x1ea4>
    136d:	e8 be fd ff ff       	call   1130 <perror@plt>
    1372:	bf 01 00 00 00       	mov    edi,0x1
    1377:	e8 e4 fc ff ff       	call   1060 <exit@plt>
    137c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1380:	89 d1                	mov    ecx,edx
    1382:	b8 01 00 00 00       	mov    eax,0x1
    1387:	53                   	push   rbx
    1388:	48 89 fb             	mov    rbx,rdi
    138b:	d3 e0                	shl    eax,cl
    138d:	8d 78 ff             	lea    edi,[rax-0x1]
    1390:	21 f7                	and    edi,esi
    1392:	48 8b 73 18          	mov    rsi,QWORD PTR [rbx+0x18]
    1396:	48 d3 e6             	shl    rsi,cl
    1399:	03 4b 20             	add    ecx,DWORD PTR [rbx+0x20]
    139c:	48 09 f7             	or     rdi,rsi
    139f:	89 4b 20             	mov    DWORD PTR [rbx+0x20],ecx
    13a2:	48 89 7b 18          	mov    QWORD PTR [rbx+0x18],rdi
    13a6:	83 f9 07             	cmp    ecx,0x7
    13a9:	7f 09                	jg     13b4 <main@@Base+0x254>
    13ab:	eb 28                	jmp    13d5 <main@@Base+0x275>
    13ad:	0f 1f 00             	nop    DWORD PTR [rax]
    13b0:	48 8b 7b 18          	mov    rdi,QWORD PTR [rbx+0x18]
    13b4:	83 e9 08             	sub    ecx,0x8
    13b7:	48 8b 33             	mov    rsi,QWORD PTR [rbx]
    13ba:	89 4b 20             	mov    DWORD PTR [rbx+0x20],ecx
    13bd:	48 d3 ef             	shr    rdi,cl
    13c0:	40 0f b6 ff          	movzx  edi,dil
    13c4:	e8 e7 fc ff ff       	call   10b0 <fputc@plt>
    13c9:	8b 4b 20             	mov    ecx,DWORD PTR [rbx+0x20]
    13cc:	83 43 10 01          	add    DWORD PTR [rbx+0x10],0x1
    13d0:	83 f9 07             	cmp    ecx,0x7
    13d3:	7f db                	jg     13b0 <main@@Base+0x250>
    13d5:	b8 01 00 00 00       	mov    eax,0x1
    13da:	d3 e0                	shl    eax,cl
    13dc:	83 e8 01             	sub    eax,0x1
    13df:	21 c1                	and    ecx,eax
    13e1:	89 4b 20             	mov    DWORD PTR [rbx+0x20],ecx
    13e4:	5b                   	pop    rbx
    13e5:	c3                   	ret    
    13e6:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    13ed:	00 00 00 
    13f0:	41 55                	push   r13
    13f2:	41 54                	push   r12
    13f4:	55                   	push   rbp
    13f5:	48 89 fd             	mov    rbp,rdi
    13f8:	85 f6                	test   esi,esi
    13fa:	74 64                	je     1460 <main@@Base+0x300>
    13fc:	44 0f bd c6          	bsr    r8d,esi
    1400:	bf 20 00 00 00       	mov    edi,0x20
    1405:	b8 01 00 00 00       	mov    eax,0x1
    140a:	ba 21 00 00 00       	mov    edx,0x21
    140f:	41 83 f0 1f          	xor    r8d,0x1f
    1413:	41 89 c4             	mov    r12d,eax
    1416:	44 29 c7             	sub    edi,r8d
    1419:	44 29 c2             	sub    edx,r8d
    141c:	44 0f b6 ef          	movzx  r13d,dil
    1420:	0f b6 d2             	movzx  edx,dl
    1423:	41 83 ed 01          	sub    r13d,0x1
    1427:	44 89 e9             	mov    ecx,r13d
    142a:	41 d3 e4             	shl    r12d,cl
    142d:	89 f9                	mov    ecx,edi
    142f:	48 89 ef             	mov    rdi,rbp
    1432:	41 83 ec 01          	sub    r12d,0x1
    1436:	d3 e0                	shl    eax,cl
    1438:	41 21 f4             	and    r12d,esi
    143b:	8d 74 00 fe          	lea    esi,[rax+rax*1-0x2]
    143f:	e8 3c ff ff ff       	call   1380 <main@@Base+0x220>
    1444:	45 85 ed             	test   r13d,r13d
    1447:	74 2b                	je     1474 <main@@Base+0x314>
    1449:	44 89 ea             	mov    edx,r13d
    144c:	44 89 e6             	mov    esi,r12d
    144f:	48 89 ef             	mov    rdi,rbp
    1452:	5d                   	pop    rbp
    1453:	41 5c                	pop    r12
    1455:	41 5d                	pop    r13
    1457:	e9 24 ff ff ff       	jmp    1380 <main@@Base+0x220>
    145c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1460:	48 89 ef             	mov    rdi,rbp
    1463:	ba 01 00 00 00       	mov    edx,0x1
    1468:	5d                   	pop    rbp
    1469:	31 f6                	xor    esi,esi
    146b:	41 5c                	pop    r12
    146d:	41 5d                	pop    r13
    146f:	e9 0c ff ff ff       	jmp    1380 <main@@Base+0x220>
    1474:	5d                   	pop    rbp
    1475:	41 5c                	pop    r12
    1477:	41 5d                	pop    r13
    1479:	c3                   	ret    
    147a:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    1480:	53                   	push   rbx
    1481:	8b 47 2c             	mov    eax,DWORD PTR [rdi+0x2c]
    1484:	48 89 fb             	mov    rbx,rdi
    1487:	85 c0                	test   eax,eax
    1489:	7e 1a                	jle    14a5 <main@@Base+0x345>
    148b:	be 02 00 00 00       	mov    esi,0x2
    1490:	ba 02 00 00 00       	mov    edx,0x2
    1495:	e8 e6 fe ff ff       	call   1380 <main@@Base+0x220>
    149a:	8b 73 2c             	mov    esi,DWORD PTR [rbx+0x2c]
    149d:	48 89 df             	mov    rdi,rbx
    14a0:	e8 4b ff ff ff       	call   13f0 <main@@Base+0x290>
    14a5:	8b 43 20             	mov    eax,DWORD PTR [rbx+0x20]
    14a8:	48 c7 43 28 00 00 00 	mov    QWORD PTR [rbx+0x28],0x0
    14af:	00 
    14b0:	85 c0                	test   eax,eax
    14b2:	7e 1e                	jle    14d2 <main@@Base+0x372>
    14b4:	48 8b 7b 18          	mov    rdi,QWORD PTR [rbx+0x18]
    14b8:	b9 08 00 00 00       	mov    ecx,0x8
    14bd:	48 8b 33             	mov    rsi,QWORD PTR [rbx]
    14c0:	29 c1                	sub    ecx,eax
    14c2:	48 d3 e7             	shl    rdi,cl
    14c5:	40 0f b6 ff          	movzx  edi,dil
    14c9:	e8 e2 fb ff ff       	call   10b0 <fputc@plt>
    14ce:	83 43 10 01          	add    DWORD PTR [rbx+0x10],0x1
    14d2:	48 c7 43 18 00 00 00 	mov    QWORD PTR [rbx+0x18],0x0
    14d9:	00 
    14da:	c7 43 20 00 00 00 00 	mov    DWORD PTR [rbx+0x20],0x0
    14e1:	5b                   	pop    rbx
    14e2:	c3                   	ret    
    14e3:	66 66 2e 0f 1f 84 00 	data16 cs nop WORD PTR [rax+rax*1+0x0]
    14ea:	00 00 00 00 
    14ee:	66 90                	xchg   ax,ax
    14f0:	41 55                	push   r13
    14f2:	4c 8d ae 80 00 00 00 	lea    r13,[rsi+0x80]
    14f9:	41 54                	push   r12
    14fb:	49 89 f4             	mov    r12,rsi
    14fe:	55                   	push   rbp
    14ff:	53                   	push   rbx
    1500:	48 89 fb             	mov    rbx,rdi
    1503:	48 83 ec 08          	sub    rsp,0x8
    1507:	8b 57 2c             	mov    edx,DWORD PTR [rdi+0x2c]
    150a:	eb 13                	jmp    151f <main@@Base+0x3bf>
    150c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1510:	83 c2 01             	add    edx,0x1
    1513:	49 83 c4 01          	add    r12,0x1
    1517:	89 53 2c             	mov    DWORD PTR [rbx+0x2c],edx
    151a:	4d 39 e5             	cmp    r13,r12
    151d:	74 72                	je     1591 <main@@Base+0x431>
    151f:	41 0f b6 2c 24       	movzx  ebp,BYTE PTR [r12]
    1524:	0f b6 4b 24          	movzx  ecx,BYTE PTR [rbx+0x24]
    1528:	89 e8                	mov    eax,ebp
    152a:	29 cd                	sub    ebp,ecx
    152c:	88 43 24             	mov    BYTE PTR [rbx+0x24],al
    152f:	3b 6b 28             	cmp    ebp,DWORD PTR [rbx+0x28]
    1532:	74 dc                	je     1510 <main@@Base+0x3b0>
    1534:	85 d2                	test   edx,edx
    1536:	7e 1d                	jle    1555 <main@@Base+0x3f5>
    1538:	be 02 00 00 00       	mov    esi,0x2
    153d:	48 89 df             	mov    rdi,rbx
    1540:	ba 02 00 00 00       	mov    edx,0x2
    1545:	e8 36 fe ff ff       	call   1380 <main@@Base+0x220>
    154a:	8b 73 2c             	mov    esi,DWORD PTR [rbx+0x2c]
    154d:	48 89 df             	mov    rdi,rbx
    1550:	e8 9b fe ff ff       	call   13f0 <main@@Base+0x290>
    1555:	89 ee                	mov    esi,ebp
    1557:	ba 01 00 00 00       	mov    edx,0x1
    155c:	48 89 df             	mov    rdi,rbx
    155f:	49 83 c4 01          	add    r12,0x1
    1563:	48 c7 43 28 00 00 00 	mov    QWORD PTR [rbx+0x28],0x0
    156a:	00 
    156b:	c1 ee 1f             	shr    esi,0x1f
    156e:	e8 0d fe ff ff       	call   1380 <main@@Base+0x220>
    1573:	89 e8                	mov    eax,ebp
    1575:	48 89 df             	mov    rdi,rbx
    1578:	c1 f8 1f             	sar    eax,0x1f
    157b:	89 c6                	mov    esi,eax
    157d:	31 ee                	xor    esi,ebp
    157f:	29 c6                	sub    esi,eax
    1581:	e8 6a fe ff ff       	call   13f0 <main@@Base+0x290>
    1586:	89 6b 28             	mov    DWORD PTR [rbx+0x28],ebp
    1589:	8b 53 2c             	mov    edx,DWORD PTR [rbx+0x2c]
    158c:	4d 39 e5             	cmp    r13,r12
    158f:	75 8e                	jne    151f <main@@Base+0x3bf>
    1591:	85 d2                	test   edx,edx
    1593:	7e 1d                	jle    15b2 <main@@Base+0x452>
    1595:	be 02 00 00 00       	mov    esi,0x2
    159a:	48 89 df             	mov    rdi,rbx
    159d:	ba 02 00 00 00       	mov    edx,0x2
    15a2:	e8 d9 fd ff ff       	call   1380 <main@@Base+0x220>
    15a7:	8b 73 2c             	mov    esi,DWORD PTR [rbx+0x2c]
    15aa:	48 89 df             	mov    rdi,rbx
    15ad:	e8 3e fe ff ff       	call   13f0 <main@@Base+0x290>
    15b2:	48 c7 43 28 00 00 00 	mov    QWORD PTR [rbx+0x28],0x0
    15b9:	00 
    15ba:	c6 43 24 00          	mov    BYTE PTR [rbx+0x24],0x0
    15be:	48 83 c4 08          	add    rsp,0x8
    15c2:	5b                   	pop    rbx
    15c3:	5d                   	pop    rbp
    15c4:	41 5c                	pop    r12
    15c6:	41 5d                	pop    r13
    15c8:	c3                   	ret    
    15c9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    15d0:	48 83 ec 08          	sub    rsp,0x8
    15d4:	48 8b 3d 4d 3b 00 00 	mov    rdi,QWORD PTR [rip+0x3b4d]        # 5128 <main@@Base+0x3fc8>
    15db:	48 8b 35 9e 3b 00 00 	mov    rsi,QWORD PTR [rip+0x3b9e]        # 5180 <stderr@GLIBC_2.2.5>
    15e2:	e8 e9 fa ff ff       	call   10d0 <fputs@plt>
    15e7:	bf 01 00 00 00       	mov    edi,0x1
    15ec:	e8 6f fa ff ff       	call   1060 <exit@plt>
    15f1:	66 66 2e 0f 1f 84 00 	data16 cs nop WORD PTR [rax+rax*1+0x0]
    15f8:	00 00 00 00 
    15fc:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1600:	41 54                	push   r12
    1602:	49 89 fc             	mov    r12,rdi
    1605:	48 89 f7             	mov    rdi,rsi
    1608:	48 8d 35 fb 19 00 00 	lea    rsi,[rip+0x19fb]        # 300a <main@@Base+0x1eaa>
    160f:	55                   	push   rbp
    1610:	89 d5                	mov    ebp,edx
    1612:	53                   	push   rbx
    1613:	48 83 ec 10          	sub    rsp,0x10
    1617:	e8 84 fa ff ff       	call   10a0 <fopen@plt>
    161c:	48 85 c0             	test   rax,rax
    161f:	0f 84 86 00 00 00    	je     16ab <main@@Base+0x54b>
    1625:	48 89 c3             	mov    rbx,rax
    1628:	48 89 e7             	mov    rdi,rsp
    162b:	ba 10 00 00 00       	mov    edx,0x10
    1630:	be 01 00 00 00       	mov    esi,0x1
    1635:	48 b8 4d 50 4c 45 57 	movabs rax,0x45564157454c504d
    163c:	41 56 45 
    163f:	48 89 d9             	mov    rcx,rbx
    1642:	40 88 6c 24 08       	mov    BYTE PTR [rsp+0x8],bpl
    1647:	48 89 04 24          	mov    QWORD PTR [rsp],rax
    164b:	31 c0                	xor    eax,eax
    164d:	66 89 44 24 09       	mov    WORD PTR [rsp+0x9],ax
    1652:	c6 44 24 0b 00       	mov    BYTE PTR [rsp+0xb],0x0
    1657:	c7 44 24 0c 00 00 00 	mov    DWORD PTR [rsp+0xc],0x0
    165e:	00 
    165f:	e8 bc fa ff ff       	call   1120 <fwrite@plt>
    1664:	31 d2                	xor    edx,edx
    1666:	49 89 1c 24          	mov    QWORD PTR [r12],rbx
    166a:	48 b8 00 00 00 00 10 	movabs rax,0x1000000000
    1671:	00 00 00 
    1674:	41 88 6c 24 08       	mov    BYTE PTR [r12+0x8],bpl
    1679:	49 89 44 24 0c       	mov    QWORD PTR [r12+0xc],rax
    167e:	4c 89 e0             	mov    rax,r12
    1681:	49 c7 44 24 18 00 00 	mov    QWORD PTR [r12+0x18],0x0
    1688:	00 00 
    168a:	41 c7 44 24 20 00 00 	mov    DWORD PTR [r12+0x20],0x0
    1691:	00 00 
    1693:	66 41 89 54 24 24    	mov    WORD PTR [r12+0x24],dx
    1699:	49 c7 44 24 28 00 00 	mov    QWORD PTR [r12+0x28],0x0
    16a0:	00 00 
    16a2:	48 83 c4 10          	add    rsp,0x10
    16a6:	5b                   	pop    rbx
    16a7:	5d                   	pop    rbp
    16a8:	41 5c                	pop    r12
    16aa:	c3                   	ret    
    16ab:	48 8d 3d 5b 19 00 00 	lea    rdi,[rip+0x195b]        # 300d <main@@Base+0x1ead>
    16b2:	e8 79 fa ff ff       	call   1130 <perror@plt>
    16b7:	bf 01 00 00 00       	mov    edi,0x1
    16bc:	e8 9f f9 ff ff       	call   1060 <exit@plt>
    16c1:	66 66 2e 0f 1f 84 00 	data16 cs nop WORD PTR [rax+rax*1+0x0]
    16c8:	00 00 00 00 
    16cc:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    16d0:	53                   	push   rbx
    16d1:	48 8d 05 18 3a 00 00 	lea    rax,[rip+0x3a18]        # 50f0 <main@@Base+0x3f90>
    16d8:	48 89 fb             	mov    rbx,rdi
    16db:	48 83 ec 10          	sub    rsp,0x10
    16df:	48 0f be 57 08       	movsx  rdx,BYTE PTR [rdi+0x8]
    16e4:	ff 14 d0             	call   QWORD PTR [rax+rdx*8]
    16e7:	48 8b 3b             	mov    rdi,QWORD PTR [rbx]
    16ea:	31 d2                	xor    edx,edx
    16ec:	31 f6                	xor    esi,esi
    16ee:	48 b8 4d 50 4c 45 57 	movabs rax,0x45564157454c504d
    16f5:	41 56 45 
    16f8:	c6 44 24 0b 00       	mov    BYTE PTR [rsp+0xb],0x0
    16fd:	48 89 04 24          	mov    QWORD PTR [rsp],rax
    1701:	0f b6 43 08          	movzx  eax,BYTE PTR [rbx+0x8]
    1705:	88 44 24 08          	mov    BYTE PTR [rsp+0x8],al
    1709:	31 c0                	xor    eax,eax
    170b:	66 89 44 24 09       	mov    WORD PTR [rsp+0x9],ax
    1710:	8b 43 0c             	mov    eax,DWORD PTR [rbx+0xc]
    1713:	89 44 24 0c          	mov    DWORD PTR [rsp+0xc],eax
    1717:	e8 34 f9 ff ff       	call   1050 <fseek@plt>
    171c:	48 8b 0b             	mov    rcx,QWORD PTR [rbx]
    171f:	48 89 e7             	mov    rdi,rsp
    1722:	ba 10 00 00 00       	mov    edx,0x10
    1727:	be 01 00 00 00       	mov    esi,0x1
    172c:	e8 ef f9 ff ff       	call   1120 <fwrite@plt>
    1731:	48 8b 3b             	mov    rdi,QWORD PTR [rbx]
    1734:	e8 c7 f9 ff ff       	call   1100 <fclose@plt>
    1739:	48 83 c4 10          	add    rsp,0x10
    173d:	5b                   	pop    rbx
    173e:	c3                   	ret    
    173f:	90                   	nop
    1740:	41 57                	push   r15
    1742:	41 56                	push   r14
    1744:	41 55                	push   r13
    1746:	41 54                	push   r12
    1748:	41 89 f4             	mov    r12d,esi
    174b:	48 8d 35 ce fb ff ff 	lea    rsi,[rip+0xfffffffffffffbce]        # 1320 <main@@Base+0x1c0>
    1752:	55                   	push   rbp
    1753:	53                   	push   rbx
    1754:	48 83 ec 58          	sub    rsp,0x58
    1758:	48 89 7c 24 08       	mov    QWORD PTR [rsp+0x8],rdi
    175d:	bf 02 00 00 00       	mov    edi,0x2
    1762:	e8 89 f9 ff ff       	call   10f0 <signal@plt>
    1767:	48 83 f8 ff          	cmp    rax,0xffffffffffffffff
    176b:	0f 84 2e 02 00 00    	je     199f <main@@Base+0x83f>
    1771:	48 83 ec 08          	sub    rsp,0x8
    1775:	4c 8d 05 9d 18 00 00 	lea    r8,[rip+0x189d]        # 3019 <main@@Base+0x1eb9>
    177c:	31 c9                	xor    ecx,ecx
    177e:	31 ff                	xor    edi,edi
    1780:	48 8d 44 24 24       	lea    rax,[rsp+0x24]
    1785:	4c 8d 0d 4c 39 00 00 	lea    r9,[rip+0x394c]        # 50d8 <main@@Base+0x3f78>
    178c:	ba 02 00 00 00       	mov    edx,0x2
    1791:	4c 89 c6             	mov    rsi,r8
    1794:	48 89 44 24 08       	mov    QWORD PTR [rsp+0x8],rax
    1799:	50                   	push   rax
    179a:	48 8d 05 1f 39 00 00 	lea    rax,[rip+0x391f]        # 50c0 <main@@Base+0x3f60>
    17a1:	50                   	push   rax
    17a2:	6a 00                	push   0x0
    17a4:	e8 d7 f8 ff ff       	call   1080 <pa_simple_new@plt>
    17a9:	48 83 c4 20          	add    rsp,0x20
    17ad:	49 89 c6             	mov    r14,rax
    17b0:	48 85 c0             	test   rax,rax
    17b3:	0f 84 af 01 00 00    	je     1968 <main@@Base+0x808>
    17b9:	48 8b 74 24 08       	mov    rsi,QWORD PTR [rsp+0x8]
    17be:	4c 8d 7c 24 20       	lea    r15,[rsp+0x20]
    17c3:	44 89 e2             	mov    edx,r12d
    17c6:	4c 89 ff             	mov    rdi,r15
    17c9:	e8 32 fe ff ff       	call   1600 <main@@Base+0x4a0>
    17ce:	44 8b 2d cb 3d 00 00 	mov    r13d,DWORD PTR [rip+0x3dcb]        # 55a0 <stderr@GLIBC_2.2.5+0x420>
    17d5:	45 85 ed             	test   r13d,r13d
    17d8:	0f 85 b2 01 00 00    	jne    1990 <main@@Base+0x830>
    17de:	31 ed                	xor    ebp,ebp
    17e0:	45 31 e4             	xor    r12d,r12d
    17e3:	31 db                	xor    ebx,ebx
    17e5:	eb 51                	jmp    1838 <main@@Base+0x6d8>
    17e7:	66 0f 1f 84 00 00 00 	nop    WORD PTR [rax+rax*1+0x0]
    17ee:	00 00 
    17f0:	48 8b 0c 24          	mov    rcx,QWORD PTR [rsp]
    17f4:	ba 80 00 00 00       	mov    edx,0x80
    17f9:	4c 89 f7             	mov    rdi,r14
    17fc:	83 c3 01             	add    ebx,0x1
    17ff:	48 8d 35 ba 4f 00 00 	lea    rsi,[rip+0x4fba]        # 67c0 <stderr@GLIBC_2.2.5+0x1640>
    1806:	e8 25 f8 ff ff       	call   1030 <pa_simple_read@plt>
    180b:	48 0f be 44 24 28    	movsx  rax,BYTE PTR [rsp+0x28]
    1811:	48 8d 0d f8 38 00 00 	lea    rcx,[rip+0x38f8]        # 5110 <main@@Base+0x3fb0>
    1818:	4c 89 ff             	mov    rdi,r15
    181b:	48 8d 35 9e 4f 00 00 	lea    rsi,[rip+0x4f9e]        # 67c0 <stderr@GLIBC_2.2.5+0x1640>
    1822:	ff 14 c1             	call   QWORD PTR [rcx+rax*8]
    1825:	8b 05 75 3d 00 00    	mov    eax,DWORD PTR [rip+0x3d75]        # 55a0 <stderr@GLIBC_2.2.5+0x420>
    182b:	83 44 24 2c 01       	add    DWORD PTR [rsp+0x2c],0x1
    1830:	85 c0                	test   eax,eax
    1832:	0f 85 b8 00 00 00    	jne    18f0 <main@@Base+0x790>
    1838:	8d 04 dd 00 00 00 00 	lea    eax,[rbx*8+0x0]
    183f:	f6 c3 07             	test   bl,0x7
    1842:	75 ac                	jne    17f0 <main@@Base+0x690>
    1844:	48 69 d0 d3 4d 62 10 	imul   rdx,rax,0x10624dd3
    184b:	be cd cc cc cc       	mov    esi,0xcccccccd
    1850:	bf 89 88 88 88       	mov    edi,0x88888889
    1855:	4c 69 e8 73 b2 e7 45 	imul   r13,rax,0x45e7b273
    185c:	48 0f af c6          	imul   rax,rsi
    1860:	48 8d 35 e9 17 00 00 	lea    rsi,[rip+0x17e9]        # 3050 <main@@Base+0x1ef0>
    1867:	48 c1 ea 26          	shr    rdx,0x26
    186b:	41 89 d4             	mov    r12d,edx
    186e:	49 c1 ed 2e          	shr    r13,0x2e
    1872:	4c 0f af e7          	imul   r12,rdi
    1876:	48 c1 e8 23          	shr    rax,0x23
    187a:	48 8b 3d ff 38 00 00 	mov    rdi,QWORD PTR [rip+0x38ff]        # 5180 <stderr@GLIBC_2.2.5>
    1881:	45 89 e8             	mov    r8d,r13d
    1884:	89 c5                	mov    ebp,eax
    1886:	48 69 ed 1f 85 eb 51 	imul   rbp,rbp,0x51eb851f
    188d:	49 c1 ec 25          	shr    r12,0x25
    1891:	41 6b cc 3c          	imul   ecx,r12d,0x3c
    1895:	48 c1 ed 25          	shr    rbp,0x25
    1899:	29 ca                	sub    edx,ecx
    189b:	48 8d 0d a1 17 00 00 	lea    rcx,[rip+0x17a1]        # 3043 <main@@Base+0x1ee3>
    18a2:	41 89 d4             	mov    r12d,edx
    18a5:	6b d5 64             	imul   edx,ebp,0x64
    18a8:	45 89 e1             	mov    r9d,r12d
    18ab:	29 d0                	sub    eax,edx
    18ad:	8b 54 24 30          	mov    edx,DWORD PTR [rsp+0x30]
    18b1:	89 c5                	mov    ebp,eax
    18b3:	89 d8                	mov    eax,ebx
    18b5:	c1 f8 03             	sar    eax,0x3
    18b8:	83 e0 03             	and    eax,0x3
    18bb:	85 d2                	test   edx,edx
    18bd:	44 0f be 1c 01       	movsx  r11d,BYTE PTR [rcx+rax*1]
    18c2:	8d 82 ff 03 00 00    	lea    eax,[rdx+0x3ff]
    18c8:	0f 49 c2             	cmovns eax,edx
    18cb:	44 89 da             	mov    edx,r11d
    18ce:	c1 f8 0a             	sar    eax,0xa
    18d1:	50                   	push   rax
    18d2:	31 c0                	xor    eax,eax
    18d4:	55                   	push   rbp
    18d5:	48 8b 4c 24 18       	mov    rcx,QWORD PTR [rsp+0x18]
    18da:	e8 61 f8 ff ff       	call   1140 <fprintf@plt>
    18df:	58                   	pop    rax
    18e0:	5a                   	pop    rdx
    18e1:	e9 0a ff ff ff       	jmp    17f0 <main@@Base+0x690>
    18e6:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    18ed:	00 00 00 
    18f0:	c1 e3 07             	shl    ebx,0x7
    18f3:	4c 89 ff             	mov    rdi,r15
    18f6:	e8 d5 fd ff ff       	call   16d0 <main@@Base+0x570>
    18fb:	4c 89 f7             	mov    rdi,r14
    18fe:	e8 6d f7 ff ff       	call   1070 <pa_simple_free@plt>
    1903:	48 8b 74 24 08       	mov    rsi,QWORD PTR [rsp+0x8]
    1908:	48 8d 3d 21 17 00 00 	lea    rdi,[rip+0x1721]        # 3030 <main@@Base+0x1ed0>
    190f:	31 c0                	xor    eax,eax
    1911:	e8 2a f7 ff ff       	call   1040 <printf@plt>
    1916:	8b 44 24 30          	mov    eax,DWORD PTR [rsp+0x30]
    191a:	41 89 e8             	mov    r8d,ebp
    191d:	44 89 e1             	mov    ecx,r12d
    1920:	0f be 74 24 28       	movsx  esi,BYTE PTR [rsp+0x28]
    1925:	48 8d 3d 54 17 00 00 	lea    rdi,[rip+0x1754]        # 3080 <main@@Base+0x1f20>
    192c:	85 c0                	test   eax,eax
    192e:	44 8d 88 ff 03 00 00 	lea    r9d,[rax+0x3ff]
    1935:	44 0f 49 c8          	cmovns r9d,eax
    1939:	6b c0 64             	imul   eax,eax,0x64
    193c:	48 83 ec 08          	sub    rsp,0x8
    1940:	41 c1 f9 0a          	sar    r9d,0xa
    1944:	99                   	cdq    
    1945:	f7 fb                	idiv   ebx
    1947:	44 89 ea             	mov    edx,r13d
    194a:	50                   	push   rax
    194b:	31 c0                	xor    eax,eax
    194d:	e8 ee f6 ff ff       	call   1040 <printf@plt>
    1952:	48 83 c4 68          	add    rsp,0x68
    1956:	5b                   	pop    rbx
    1957:	5d                   	pop    rbp
    1958:	41 5c                	pop    r12
    195a:	41 5d                	pop    r13
    195c:	41 5e                	pop    r14
    195e:	41 5f                	pop    r15
    1960:	c3                   	ret    
    1961:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    1968:	8b 7c 24 1c          	mov    edi,DWORD PTR [rsp+0x1c]
    196c:	e8 9f f7 ff ff       	call   1110 <pa_strerror@plt>
    1971:	48 8d 3d a6 16 00 00 	lea    rdi,[rip+0x16a6]        # 301e <main@@Base+0x1ebe>
    1978:	48 89 c6             	mov    rsi,rax
    197b:	31 c0                	xor    eax,eax
    197d:	e8 be f6 ff ff       	call   1040 <printf@plt>
    1982:	e9 32 fe ff ff       	jmp    17b9 <main@@Base+0x659>
    1987:	66 0f 1f 84 00 00 00 	nop    WORD PTR [rax+rax*1+0x0]
    198e:	00 00 
    1990:	31 db                	xor    ebx,ebx
    1992:	31 ed                	xor    ebp,ebp
    1994:	45 31 e4             	xor    r12d,r12d
    1997:	45 31 ed             	xor    r13d,r13d
    199a:	e9 54 ff ff ff       	jmp    18f3 <main@@Base+0x793>
    199f:	48 8d 3d 6c 16 00 00 	lea    rdi,[rip+0x166c]        # 3012 <main@@Base+0x1eb2>
    19a6:	e8 85 f7 ff ff       	call   1130 <perror@plt>
    19ab:	bf 01 00 00 00       	mov    edi,0x1
    19b0:	e8 ab f6 ff ff       	call   1060 <exit@plt>
    19b5:	66 66 2e 0f 1f 84 00 	data16 cs nop WORD PTR [rax+rax*1+0x0]
    19bc:	00 00 00 00 
    19c0:	48 0f be 57 08       	movsx  rdx,BYTE PTR [rdi+0x8]
    19c5:	53                   	push   rbx
    19c6:	48 8d 05 43 37 00 00 	lea    rax,[rip+0x3743]        # 5110 <main@@Base+0x3fb0>
    19cd:	48 89 fb             	mov    rbx,rdi
    19d0:	ff 14 d0             	call   QWORD PTR [rax+rdx*8]
    19d3:	83 43 0c 01          	add    DWORD PTR [rbx+0xc],0x1
    19d7:	5b                   	pop    rbx
    19d8:	c3                   	ret    
    19d9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    19e0:	55                   	push   rbp
    19e1:	53                   	push   rbx
    19e2:	48 89 fb             	mov    rbx,rdi
    19e5:	48 83 ec 08          	sub    rsp,0x8
    19e9:	8b 47 2c             	mov    eax,DWORD PTR [rdi+0x2c]
    19ec:	39 77 28             	cmp    DWORD PTR [rdi+0x28],esi
    19ef:	75 0f                	jne    1a00 <main@@Base+0x8a0>
    19f1:	83 c0 01             	add    eax,0x1
    19f4:	89 47 2c             	mov    DWORD PTR [rdi+0x2c],eax
    19f7:	48 83 c4 08          	add    rsp,0x8
    19fb:	5b                   	pop    rbx
    19fc:	5d                   	pop    rbp
    19fd:	c3                   	ret    
    19fe:	66 90                	xchg   ax,ax
    1a00:	89 f5                	mov    ebp,esi
    1a02:	85 c0                	test   eax,eax
    1a04:	7e 1a                	jle    1a20 <main@@Base+0x8c0>
    1a06:	be 02 00 00 00       	mov    esi,0x2
    1a0b:	ba 02 00 00 00       	mov    edx,0x2
    1a10:	e8 6b f9 ff ff       	call   1380 <main@@Base+0x220>
    1a15:	8b 73 2c             	mov    esi,DWORD PTR [rbx+0x2c]
    1a18:	48 89 df             	mov    rdi,rbx
    1a1b:	e8 d0 f9 ff ff       	call   13f0 <main@@Base+0x290>
    1a20:	48 c7 43 28 00 00 00 	mov    QWORD PTR [rbx+0x28],0x0
    1a27:	00 
    1a28:	89 ee                	mov    esi,ebp
    1a2a:	48 89 df             	mov    rdi,rbx
    1a2d:	ba 01 00 00 00       	mov    edx,0x1
    1a32:	c1 ee 1f             	shr    esi,0x1f
    1a35:	e8 46 f9 ff ff       	call   1380 <main@@Base+0x220>
    1a3a:	89 e8                	mov    eax,ebp
    1a3c:	48 89 df             	mov    rdi,rbx
    1a3f:	c1 f8 1f             	sar    eax,0x1f
    1a42:	89 c6                	mov    esi,eax
    1a44:	31 ee                	xor    esi,ebp
    1a46:	29 c6                	sub    esi,eax
    1a48:	e8 a3 f9 ff ff       	call   13f0 <main@@Base+0x290>
    1a4d:	89 6b 28             	mov    DWORD PTR [rbx+0x28],ebp
    1a50:	48 83 c4 08          	add    rsp,0x8
    1a54:	5b                   	pop    rbx
    1a55:	5d                   	pop    rbp
    1a56:	c3                   	ret    
    1a57:	66 0f 1f 84 00 00 00 	nop    WORD PTR [rax+rax*1+0x0]
    1a5e:	00 00 
    1a60:	41 57                	push   r15
    1a62:	48 89 f9             	mov    rcx,rdi
    1a65:	31 c0                	xor    eax,eax
    1a67:	48 8d 3d 32 37 00 00 	lea    rdi,[rip+0x3732]        # 51a0 <stderr@GLIBC_2.2.5+0x20>
    1a6e:	41 56                	push   r14
    1a70:	41 55                	push   r13
    1a72:	41 54                	push   r12
    1a74:	55                   	push   rbp
    1a75:	53                   	push   rbx
    1a76:	48 83 ec 68          	sub    rsp,0x68
    1a7a:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    1a80:	48 0f bf 34 47       	movsx  rsi,WORD PTR [rdi+rax*2]
    1a85:	39 c6                	cmp    esi,eax
    1a87:	7c 2c                	jl     1ab5 <main@@Base+0x955>
    1a89:	48 8d 14 f1          	lea    rdx,[rcx+rsi*8]
    1a8d:	f3 0f 10 0c c1       	movss  xmm1,DWORD PTR [rcx+rax*8]
    1a92:	f3 0f 10 44 c1 04    	movss  xmm0,DWORD PTR [rcx+rax*8+0x4]
    1a98:	f3 0f 10 1a          	movss  xmm3,DWORD PTR [rdx]
    1a9c:	f3 0f 10 52 04       	movss  xmm2,DWORD PTR [rdx+0x4]
    1aa1:	f3 0f 11 1c c1       	movss  DWORD PTR [rcx+rax*8],xmm3
    1aa6:	f3 0f 11 54 c1 04    	movss  DWORD PTR [rcx+rax*8+0x4],xmm2
    1aac:	f3 0f 11 0a          	movss  DWORD PTR [rdx],xmm1
    1ab0:	f3 0f 11 42 04       	movss  DWORD PTR [rdx+0x4],xmm0
    1ab5:	48 83 c0 01          	add    rax,0x1
    1ab9:	48 3d 00 02 00 00    	cmp    rax,0x200
    1abf:	75 bf                	jne    1a80 <main@@Base+0x920>
    1ac1:	48 8d 41 08          	lea    rax,[rcx+0x8]
    1ac5:	41 bc 09 00 00 00    	mov    r12d,0x9
    1acb:	f3 0f 10 3d 99 16 00 	movss  xmm7,DWORD PTR [rip+0x1699]        # 316c <main@@Base+0x200c>
    1ad2:	00 
    1ad3:	f3 0f 10 35 95 16 00 	movss  xmm6,DWORD PTR [rip+0x1695]        # 3170 <main@@Base+0x2010>
    1ada:	00 
    1adb:	48 89 44 24 08       	mov    QWORD PTR [rsp+0x8],rax
    1ae0:	41 bd 02 00 00 00    	mov    r13d,0x2
    1ae6:	66 45 0f ef c9       	pxor   xmm9,xmm9
    1aeb:	f3 44 0f 10 05 80 16 	movss  xmm8,DWORD PTR [rip+0x1680]        # 3174 <main@@Base+0x2014>
    1af2:	00 00 
    1af4:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1af8:	44 89 ee             	mov    esi,r13d
    1afb:	48 8b 44 24 08       	mov    rax,QWORD PTR [rsp+0x8]
    1b00:	49 63 d5             	movsxd rdx,r13d
    1b03:	45 31 ff             	xor    r15d,r15d
    1b06:	d1 fe                	sar    esi,1
    1b08:	48 c1 e2 03          	shl    rdx,0x3
    1b0c:	8d 4e ff             	lea    ecx,[rsi-0x1]
    1b0f:	48 63 f6             	movsxd rsi,esi
    1b12:	4c 8d 34 c8          	lea    r14,[rax+rcx*8]
    1b16:	48 f7 d9             	neg    rcx
    1b19:	48 c1 e1 03          	shl    rcx,0x3
    1b1d:	48 8d 74 f1 f8       	lea    rsi,[rcx+rsi*8-0x8]
    1b22:	48 83 e9 08          	sub    rcx,0x8
    1b26:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    1b2d:	00 00 00 
    1b30:	4a 8d 2c 36          	lea    rbp,[rsi+r14*1]
    1b34:	4a 8d 1c 31          	lea    rbx,[rcx+r14*1]
    1b38:	41 0f 28 e9          	movaps xmm5,xmm9
    1b3c:	41 0f 28 e0          	movaps xmm4,xmm8
    1b40:	eb 0c                	jmp    1b4e <main@@Base+0x9ee>
    1b42:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    1b48:	0f 28 e9             	movaps xmm5,xmm1
    1b4b:	0f 28 e0             	movaps xmm4,xmm0
    1b4e:	f3 0f 10 4d 04       	movss  xmm1,DWORD PTR [rbp+0x4]
    1b53:	f3 44 0f 10 55 00    	movss  xmm10,DWORD PTR [rbp+0x0]
    1b59:	0f 28 d4             	movaps xmm2,xmm4
    1b5c:	f3 41 0f 59 d2       	mulss  xmm2,xmm10
    1b61:	0f 28 c1             	movaps xmm0,xmm1
    1b64:	41 0f 28 da          	movaps xmm3,xmm10
    1b68:	f3 0f 59 c5          	mulss  xmm0,xmm5
    1b6c:	f3 0f 59 dd          	mulss  xmm3,xmm5
    1b70:	f3 0f 5c d0          	subss  xmm2,xmm0
    1b74:	0f 28 c4             	movaps xmm0,xmm4
    1b77:	f3 0f 59 c1          	mulss  xmm0,xmm1
    1b7b:	f3 0f 58 c3          	addss  xmm0,xmm3
    1b7f:	0f 2e d0             	ucomiss xmm2,xmm0
    1b82:	0f 8a 02 01 00 00    	jp     1c8a <main@@Base+0xb2a>
    1b88:	f3 0f 10 1b          	movss  xmm3,DWORD PTR [rbx]
    1b8c:	44 0f 28 d2          	movaps xmm10,xmm2
    1b90:	f3 0f 10 4b 04       	movss  xmm1,DWORD PTR [rbx+0x4]
    1b95:	f3 44 0f 58 d3       	addss  xmm10,xmm3
    1b9a:	f3 0f 5c da          	subss  xmm3,xmm2
    1b9e:	0f 28 d7             	movaps xmm2,xmm7
    1ba1:	f3 0f 59 d5          	mulss  xmm2,xmm5
    1ba5:	f3 44 0f 11 13       	movss  DWORD PTR [rbx],xmm10
    1baa:	44 0f 28 d0          	movaps xmm10,xmm0
    1bae:	f3 44 0f 58 d1       	addss  xmm10,xmm1
    1bb3:	f3 0f 5c c8          	subss  xmm1,xmm0
    1bb7:	0f 28 c4             	movaps xmm0,xmm4
    1bba:	f3 0f 59 c7          	mulss  xmm0,xmm7
    1bbe:	f3 44 0f 11 53 04    	movss  DWORD PTR [rbx+0x4],xmm10
    1bc4:	f3 0f 11 4d 04       	movss  DWORD PTR [rbp+0x4],xmm1
    1bc9:	0f 28 ce             	movaps xmm1,xmm6
    1bcc:	f3 0f 59 cd          	mulss  xmm1,xmm5
    1bd0:	f3 0f 11 5d 00       	movss  DWORD PTR [rbp+0x0],xmm3
    1bd5:	f3 0f 5c c1          	subss  xmm0,xmm1
    1bd9:	0f 28 cc             	movaps xmm1,xmm4
    1bdc:	f3 0f 59 ce          	mulss  xmm1,xmm6
    1be0:	f3 0f 58 ca          	addss  xmm1,xmm2
    1be4:	0f 2e c1             	ucomiss xmm0,xmm1
    1be7:	0f 8a 1f 01 00 00    	jp     1d0c <main@@Base+0xbac>
    1bed:	48 83 c3 08          	add    rbx,0x8
    1bf1:	48 83 c5 08          	add    rbp,0x8
    1bf5:	49 39 de             	cmp    r14,rbx
    1bf8:	0f 85 4a ff ff ff    	jne    1b48 <main@@Base+0x9e8>
    1bfe:	45 01 ef             	add    r15d,r13d
    1c01:	49 01 d6             	add    r14,rdx
    1c04:	41 81 ff ff 01 00 00 	cmp    r15d,0x1ff
    1c0b:	0f 8e 1f ff ff ff    	jle    1b30 <main@@Base+0x9d0>
    1c11:	45 01 ed             	add    r13d,r13d
    1c14:	41 83 ec 01          	sub    r12d,0x1
    1c18:	74 61                	je     1c7b <main@@Base+0xb1b>
    1c1a:	66 0f ef d2          	pxor   xmm2,xmm2
    1c1e:	f2 0f 10 05 52 15 00 	movsd  xmm0,QWORD PTR [rip+0x1552]        # 3178 <main@@Base+0x2018>
    1c25:	00 
    1c26:	66 0f ef c9          	pxor   xmm1,xmm1
    1c2a:	f2 41 0f 2a d5       	cvtsi2sd xmm2,r13d
    1c2f:	f2 0f 5e ca          	divsd  xmm1,xmm2
    1c33:	f2 0f 5e c2          	divsd  xmm0,xmm2
    1c37:	f2 0f 5a c9          	cvtsd2ss xmm1,xmm1
    1c3b:	f3 0f 11 4c 24 48    	movss  DWORD PTR [rsp+0x48],xmm1
    1c41:	f2 0f 5a c0          	cvtsd2ss xmm0,xmm0
    1c45:	f3 0f 11 44 24 4c    	movss  DWORD PTR [rsp+0x4c],xmm0
    1c4b:	f3 0f 7e 44 24 48    	movq   xmm0,QWORD PTR [rsp+0x48]
    1c51:	e8 6a f4 ff ff       	call   10c0 <cexpf@plt>
    1c56:	66 45 0f ef c9       	pxor   xmm9,xmm9
    1c5b:	f3 44 0f 10 05 10 15 	movss  xmm8,DWORD PTR [rip+0x1510]        # 3174 <main@@Base+0x2014>
    1c62:	00 00 
    1c64:	66 0f d6 44 24 40    	movq   QWORD PTR [rsp+0x40],xmm0
    1c6a:	f3 0f 10 7c 24 40    	movss  xmm7,DWORD PTR [rsp+0x40]
    1c70:	f3 0f 10 74 24 44    	movss  xmm6,DWORD PTR [rsp+0x44]
    1c76:	e9 7d fe ff ff       	jmp    1af8 <main@@Base+0x998>
    1c7b:	48 83 c4 68          	add    rsp,0x68
    1c7f:	5b                   	pop    rbx
    1c80:	5d                   	pop    rbp
    1c81:	41 5c                	pop    r12
    1c83:	41 5d                	pop    r13
    1c85:	41 5e                	pop    r14
    1c87:	41 5f                	pop    r15
    1c89:	c3                   	ret    
    1c8a:	0f 28 d4             	movaps xmm2,xmm4
    1c8d:	41 0f 28 c2          	movaps xmm0,xmm10
    1c91:	0f 28 dd             	movaps xmm3,xmm5
    1c94:	48 89 74 24 38       	mov    QWORD PTR [rsp+0x38],rsi
    1c99:	48 89 4c 24 30       	mov    QWORD PTR [rsp+0x30],rcx
    1c9e:	48 89 54 24 18       	mov    QWORD PTR [rsp+0x18],rdx
    1ca3:	f3 0f 11 74 24 28    	movss  DWORD PTR [rsp+0x28],xmm6
    1ca9:	f3 0f 11 7c 24 20    	movss  DWORD PTR [rsp+0x20],xmm7
    1caf:	f3 0f 11 6c 24 14    	movss  DWORD PTR [rsp+0x14],xmm5
    1cb5:	f3 0f 11 64 24 10    	movss  DWORD PTR [rsp+0x10],xmm4
    1cbb:	e8 e0 02 00 00       	call   1fa0 <main@@Base+0xe40>
    1cc0:	48 8b 74 24 38       	mov    rsi,QWORD PTR [rsp+0x38]
    1cc5:	48 8b 4c 24 30       	mov    rcx,QWORD PTR [rsp+0x30]
    1cca:	66 45 0f ef c9       	pxor   xmm9,xmm9
    1ccf:	66 0f d6 44 24 58    	movq   QWORD PTR [rsp+0x58],xmm0
    1cd5:	f3 0f 10 74 24 28    	movss  xmm6,DWORD PTR [rsp+0x28]
    1cdb:	f3 0f 10 54 24 58    	movss  xmm2,DWORD PTR [rsp+0x58]
    1ce1:	f3 0f 10 44 24 5c    	movss  xmm0,DWORD PTR [rsp+0x5c]
    1ce7:	f3 0f 10 7c 24 20    	movss  xmm7,DWORD PTR [rsp+0x20]
    1ced:	f3 44 0f 10 05 7e 14 	movss  xmm8,DWORD PTR [rip+0x147e]        # 3174 <main@@Base+0x2014>
    1cf4:	00 00 
    1cf6:	48 8b 54 24 18       	mov    rdx,QWORD PTR [rsp+0x18]
    1cfb:	f3 0f 10 6c 24 14    	movss  xmm5,DWORD PTR [rsp+0x14]
    1d01:	f3 0f 10 64 24 10    	movss  xmm4,DWORD PTR [rsp+0x10]
    1d07:	e9 7c fe ff ff       	jmp    1b88 <main@@Base+0xa28>
    1d0c:	0f 28 c4             	movaps xmm0,xmm4
    1d0f:	0f 28 de             	movaps xmm3,xmm6
    1d12:	0f 28 d7             	movaps xmm2,xmm7
    1d15:	48 89 74 24 28       	mov    QWORD PTR [rsp+0x28],rsi
    1d1a:	0f 28 cd             	movaps xmm1,xmm5
    1d1d:	48 89 4c 24 20       	mov    QWORD PTR [rsp+0x20],rcx
    1d22:	48 89 54 24 18       	mov    QWORD PTR [rsp+0x18],rdx
    1d27:	f3 0f 11 74 24 14    	movss  DWORD PTR [rsp+0x14],xmm6
    1d2d:	f3 0f 11 7c 24 10    	movss  DWORD PTR [rsp+0x10],xmm7
    1d33:	e8 68 02 00 00       	call   1fa0 <main@@Base+0xe40>
    1d38:	48 8b 74 24 28       	mov    rsi,QWORD PTR [rsp+0x28]
    1d3d:	48 8b 4c 24 20       	mov    rcx,QWORD PTR [rsp+0x20]
    1d42:	66 45 0f ef c9       	pxor   xmm9,xmm9
    1d47:	66 0f d6 44 24 50    	movq   QWORD PTR [rsp+0x50],xmm0
    1d4d:	48 8b 54 24 18       	mov    rdx,QWORD PTR [rsp+0x18]
    1d52:	f3 0f 10 44 24 50    	movss  xmm0,DWORD PTR [rsp+0x50]
    1d58:	f3 0f 10 4c 24 54    	movss  xmm1,DWORD PTR [rsp+0x54]
    1d5e:	f3 0f 10 74 24 14    	movss  xmm6,DWORD PTR [rsp+0x14]
    1d64:	f3 44 0f 10 05 07 14 	movss  xmm8,DWORD PTR [rip+0x1407]        # 3174 <main@@Base+0x2014>
    1d6b:	00 00 
    1d6d:	f3 0f 10 7c 24 10    	movss  xmm7,DWORD PTR [rsp+0x10]
    1d73:	e9 75 fe ff ff       	jmp    1bed <main@@Base+0xa8d>
    1d78:	0f 1f 84 00 00 00 00 	nop    DWORD PTR [rax+rax*1+0x0]
    1d7f:	00 
    1d80:	55                   	push   rbp
    1d81:	48 8d 2d 38 38 00 00 	lea    rbp,[rip+0x3838]        # 55c0 <stderr@GLIBC_2.2.5+0x440>
    1d88:	48 89 f9             	mov    rcx,rdi
    1d8b:	53                   	push   rbx
    1d8c:	48 89 e8             	mov    rax,rbp
    1d8f:	48 89 fb             	mov    rbx,rdi
    1d92:	48 8d 95 f0 0f 00 00 	lea    rdx,[rbp+0xff0]
    1d99:	48 8d b5 00 08 00 00 	lea    rsi,[rbp+0x800]
    1da0:	48 83 ec 08          	sub    rsp,0x8
    1da4:	f3 0f 10 0d b8 13 00 	movss  xmm1,DWORD PTR [rip+0x13b8]        # 3164 <main@@Base+0x2004>
    1dab:	00 
    1dac:	f3 0f 10 05 b4 13 00 	movss  xmm0,DWORD PTR [rip+0x13b4]        # 3168 <main@@Base+0x2008>
    1db3:	00 
    1db4:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1db8:	f3 0f 11 08          	movss  DWORD PTR [rax],xmm1
    1dbc:	48 83 c0 10          	add    rax,0x10
    1dc0:	48 83 c1 04          	add    rcx,0x4
    1dc4:	48 83 ea 10          	sub    rdx,0x10
    1dc8:	f3 0f 11 40 f4       	movss  DWORD PTR [rax-0xc],xmm0
    1dcd:	f3 0f 10 51 fc       	movss  xmm2,DWORD PTR [rcx-0x4]
    1dd2:	c7 40 fc 00 00 00 00 	mov    DWORD PTR [rax-0x4],0x0
    1dd9:	f3 0f 11 50 f8       	movss  DWORD PTR [rax-0x8],xmm2
    1dde:	f3 0f 10 51 fc       	movss  xmm2,DWORD PTR [rcx-0x4]
    1de3:	c7 42 1c 00 00 00 00 	mov    DWORD PTR [rdx+0x1c],0x0
    1dea:	f3 0f 11 52 18       	movss  DWORD PTR [rdx+0x18],xmm2
    1def:	f3 0f 11 4a 10       	movss  DWORD PTR [rdx+0x10],xmm1
    1df4:	f3 0f 11 42 14       	movss  DWORD PTR [rdx+0x14],xmm0
    1df9:	48 39 f0             	cmp    rax,rsi
    1dfc:	75 ba                	jne    1db8 <main@@Base+0xc58>
    1dfe:	48 8d 3d bb 37 00 00 	lea    rdi,[rip+0x37bb]        # 55c0 <stderr@GLIBC_2.2.5+0x440>
    1e05:	e8 56 fc ff ff       	call   1a60 <main@@Base+0x900>
    1e0a:	31 c0                	xor    eax,eax
    1e0c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    1e10:	f3 0f 10 44 c5 00    	movss  xmm0,DWORD PTR [rbp+rax*8+0x0]
    1e16:	f3 0f 11 04 83       	movss  DWORD PTR [rbx+rax*4],xmm0
    1e1b:	48 83 c0 01          	add    rax,0x1
    1e1f:	48 3d 80 00 00 00    	cmp    rax,0x80
    1e25:	75 e9                	jne    1e10 <main@@Base+0xcb0>
    1e27:	48 83 c4 08          	add    rsp,0x8
    1e2b:	5b                   	pop    rbx
    1e2c:	5d                   	pop    rbp
    1e2d:	c3                   	ret    
    1e2e:	66 90                	xchg   ax,ax
    1e30:	41 55                	push   r13
    1e32:	31 c0                	xor    eax,eax
    1e34:	41 54                	push   r12
    1e36:	55                   	push   rbp
    1e37:	48 8d 2d 82 47 00 00 	lea    rbp,[rip+0x4782]        # 65c0 <stderr@GLIBC_2.2.5+0x1440>
    1e3e:	53                   	push   rbx
    1e3f:	48 89 fb             	mov    rbx,rdi
    1e42:	48 83 ec 08          	sub    rsp,0x8
    1e46:	f2 0f 10 15 32 13 00 	movsd  xmm2,QWORD PTR [rip+0x1332]        # 3180 <main@@Base+0x2020>
    1e4d:	00 
    1e4e:	f2 0f 10 0d 32 13 00 	movsd  xmm1,QWORD PTR [rip+0x1332]        # 3188 <main@@Base+0x2028>
    1e55:	00 
    1e56:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    1e5d:	00 00 00 
    1e60:	0f b6 14 06          	movzx  edx,BYTE PTR [rsi+rax*1]
    1e64:	66 0f ef c0          	pxor   xmm0,xmm0
    1e68:	f2 0f 2a c2          	cvtsi2sd xmm0,edx
    1e6c:	f2 0f 5c c2          	subsd  xmm0,xmm2
    1e70:	f2 0f 59 c1          	mulsd  xmm0,xmm1
    1e74:	f2 0f 5a c0          	cvtsd2ss xmm0,xmm0
    1e78:	f3 0f 11 44 85 00    	movss  DWORD PTR [rbp+rax*4+0x0],xmm0
    1e7e:	48 83 c0 01          	add    rax,0x1
    1e82:	48 3d 80 00 00 00    	cmp    rax,0x80
    1e88:	75 d6                	jne    1e60 <main@@Base+0xd00>
    1e8a:	48 8d 3d 2f 47 00 00 	lea    rdi,[rip+0x472f]        # 65c0 <stderr@GLIBC_2.2.5+0x1440>
    1e91:	e8 ea fe ff ff       	call   1d80 <main@@Base+0xc20>
    1e96:	f3 44 0f 2c 65 00    	cvttss2si r12d,DWORD PTR [rbp+0x0]
    1e9c:	0f be 43 25          	movsx  eax,BYTE PTR [rbx+0x25]
    1ea0:	48 89 df             	mov    rdi,rbx
    1ea3:	ba 01 00 00 00       	mov    edx,0x1
    1ea8:	41 0f be ec          	movsx  ebp,r12b
    1eac:	29 c5                	sub    ebp,eax
    1eae:	89 ee                	mov    esi,ebp
    1eb0:	c1 ee 1f             	shr    esi,0x1f
    1eb3:	e8 c8 f4 ff ff       	call   1380 <main@@Base+0x220>
    1eb8:	89 e8                	mov    eax,ebp
    1eba:	89 ee                	mov    esi,ebp
    1ebc:	48 89 df             	mov    rdi,rbx
    1ebf:	c1 f8 1f             	sar    eax,0x1f
    1ec2:	48 8d 2d fb 46 00 00 	lea    rbp,[rip+0x46fb]        # 65c4 <stderr@GLIBC_2.2.5+0x1444>
    1ec9:	31 c6                	xor    esi,eax
    1ecb:	4c 8d ad fc 01 00 00 	lea    r13,[rbp+0x1fc]
    1ed2:	29 c6                	sub    esi,eax
    1ed4:	e8 17 f5 ff ff       	call   13f0 <main@@Base+0x290>
    1ed9:	44 88 63 25          	mov    BYTE PTR [rbx+0x25],r12b
    1edd:	8b 43 2c             	mov    eax,DWORD PTR [rbx+0x2c]
    1ee0:	eb 15                	jmp    1ef7 <main@@Base+0xd97>
    1ee2:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    1ee8:	83 c0 01             	add    eax,0x1
    1eeb:	48 83 c5 04          	add    rbp,0x4
    1eef:	89 43 2c             	mov    DWORD PTR [rbx+0x2c],eax
    1ef2:	49 39 ed             	cmp    r13,rbp
    1ef5:	74 6d                	je     1f64 <main@@Base+0xe04>
    1ef7:	f3 44 0f 2c 65 00    	cvttss2si r12d,DWORD PTR [rbp+0x0]
    1efd:	44 3b 63 28          	cmp    r12d,DWORD PTR [rbx+0x28]
    1f01:	74 e5                	je     1ee8 <main@@Base+0xd88>
    1f03:	85 c0                	test   eax,eax
    1f05:	7e 1d                	jle    1f24 <main@@Base+0xdc4>
    1f07:	be 02 00 00 00       	mov    esi,0x2
    1f0c:	48 89 df             	mov    rdi,rbx
    1f0f:	ba 02 00 00 00       	mov    edx,0x2
    1f14:	e8 67 f4 ff ff       	call   1380 <main@@Base+0x220>
    1f19:	8b 73 2c             	mov    esi,DWORD PTR [rbx+0x2c]
    1f1c:	48 89 df             	mov    rdi,rbx
    1f1f:	e8 cc f4 ff ff       	call   13f0 <main@@Base+0x290>
    1f24:	44 89 e6             	mov    esi,r12d
    1f27:	ba 01 00 00 00       	mov    edx,0x1
    1f2c:	48 89 df             	mov    rdi,rbx
    1f2f:	48 83 c5 04          	add    rbp,0x4
    1f33:	48 c7 43 28 00 00 00 	mov    QWORD PTR [rbx+0x28],0x0
    1f3a:	00 
    1f3b:	c1 ee 1f             	shr    esi,0x1f
    1f3e:	e8 3d f4 ff ff       	call   1380 <main@@Base+0x220>
    1f43:	44 89 e0             	mov    eax,r12d
    1f46:	48 89 df             	mov    rdi,rbx
    1f49:	c1 f8 1f             	sar    eax,0x1f
    1f4c:	89 c6                	mov    esi,eax
    1f4e:	44 31 e6             	xor    esi,r12d
    1f51:	29 c6                	sub    esi,eax
    1f53:	e8 98 f4 ff ff       	call   13f0 <main@@Base+0x290>
    1f58:	44 89 63 28          	mov    DWORD PTR [rbx+0x28],r12d
    1f5c:	8b 43 2c             	mov    eax,DWORD PTR [rbx+0x2c]
    1f5f:	49 39 ed             	cmp    r13,rbp
    1f62:	75 93                	jne    1ef7 <main@@Base+0xd97>
    1f64:	85 c0                	test   eax,eax
    1f66:	7e 1d                	jle    1f85 <main@@Base+0xe25>
    1f68:	be 02 00 00 00       	mov    esi,0x2
    1f6d:	48 89 df             	mov    rdi,rbx
    1f70:	ba 02 00 00 00       	mov    edx,0x2
    1f75:	e8 06 f4 ff ff       	call   1380 <main@@Base+0x220>
    1f7a:	8b 73 2c             	mov    esi,DWORD PTR [rbx+0x2c]
    1f7d:	48 89 df             	mov    rdi,rbx
    1f80:	e8 6b f4 ff ff       	call   13f0 <main@@Base+0x290>
    1f85:	48 c7 43 28 00 00 00 	mov    QWORD PTR [rbx+0x28],0x0
    1f8c:	00 
    1f8d:	48 83 c4 08          	add    rsp,0x8
    1f91:	5b                   	pop    rbx
    1f92:	5d                   	pop    rbp
    1f93:	41 5c                	pop    r12
    1f95:	41 5d                	pop    r13
    1f97:	c3                   	ret    
    1f98:	0f 1f 84 00 00 00 00 	nop    DWORD PTR [rax+rax*1+0x0]
    1f9f:	00 
    1fa0:	0f 28 f8             	movaps xmm7,xmm0
    1fa3:	44 0f 28 c9          	movaps xmm9,xmm1
    1fa7:	44 0f 28 d0          	movaps xmm10,xmm0
    1fab:	f3 0f 59 fa          	mulss  xmm7,xmm2
    1faf:	44 0f 28 da          	movaps xmm11,xmm2
    1fb3:	f3 44 0f 59 cb       	mulss  xmm9,xmm3
    1fb8:	f3 44 0f 59 d3       	mulss  xmm10,xmm3
    1fbd:	f3 44 0f 59 d9       	mulss  xmm11,xmm1
    1fc2:	0f 28 e7             	movaps xmm4,xmm7
    1fc5:	f3 41 0f 5c e1       	subss  xmm4,xmm9
    1fca:	41 0f 28 ea          	movaps xmm5,xmm10
    1fce:	f3 41 0f 58 eb       	addss  xmm5,xmm11
    1fd3:	0f 2e e4             	ucomiss xmm4,xmm4
    1fd6:	0f 9a c0             	setp   al
    1fd9:	0f 2e ed             	ucomiss xmm5,xmm5
    1fdc:	0f 9a c2             	setp   dl
    1fdf:	20 d0                	and    al,dl
    1fe1:	0f 84 b6 01 00 00    	je     219d <main@@Base+0x103d>
    1fe7:	f3 0f 10 35 a1 11 00 	movss  xmm6,DWORD PTR [rip+0x11a1]        # 3190 <main@@Base+0x2030>
    1fee:	00 
    1fef:	44 0f 28 c0          	movaps xmm8,xmm0
    1ff3:	44 0f 28 e1          	movaps xmm12,xmm1
    1ff7:	44 0f 54 c6          	andps  xmm8,xmm6
    1ffb:	44 0f 2e 05 ad 11 00 	ucomiss xmm8,DWORD PTR [rip+0x11ad]        # 31b0 <main@@Base+0x2050>
    2002:	00 
    2003:	44 0f 54 e6          	andps  xmm12,xmm6
    2007:	0f 97 c2             	seta   dl
    200a:	44 0f 2e 05 9e 11 00 	ucomiss xmm8,DWORD PTR [rip+0x119e]        # 31b0 <main@@Base+0x2050>
    2011:	00 
    2012:	0f 86 98 01 00 00    	jbe    21b0 <main@@Base+0x1050>
    2018:	66 45 0f ef ed       	pxor   xmm13,xmm13
    201d:	44 0f 28 f0          	movaps xmm14,xmm0
    2021:	44 0f 28 f9          	movaps xmm15,xmm1
    2025:	0f b6 d2             	movzx  edx,dl
    2028:	f3 44 0f 10 05 6f 11 	movss  xmm8,DWORD PTR [rip+0x116f]        # 31a0 <main@@Base+0x2040>
    202f:	00 00 
    2031:	f3 44 0f 2a ea       	cvtsi2ss xmm13,edx
    2036:	31 d2                	xor    edx,edx
    2038:	44 0f 2e 25 70 11 00 	ucomiss xmm12,DWORD PTR [rip+0x1170]        # 31b0 <main@@Base+0x2050>
    203f:	00 
    2040:	45 0f 54 f0          	andps  xmm14,xmm8
    2044:	45 0f 54 f8          	andps  xmm15,xmm8
    2048:	66 45 0f ef e4       	pxor   xmm12,xmm12
    204d:	0f 97 c2             	seta   dl
    2050:	0f 2e d2             	ucomiss xmm2,xmm2
    2053:	44 0f 54 ee          	andps  xmm13,xmm6
    2057:	f3 44 0f 2a e2       	cvtsi2ss xmm12,edx
    205c:	45 0f 56 ee          	orps   xmm13,xmm14
    2060:	41 0f 28 c5          	movaps xmm0,xmm13
    2064:	44 0f 54 e6          	andps  xmm12,xmm6
    2068:	45 0f 56 e7          	orps   xmm12,xmm15
    206c:	41 0f 28 cc          	movaps xmm1,xmm12
    2070:	0f 8a 8a 01 00 00    	jp     2200 <main@@Base+0x10a0>
    2076:	0f 2e db             	ucomiss xmm3,xmm3
    2079:	0f 8a 91 01 00 00    	jp     2210 <main@@Base+0x10b0>
    207f:	44 0f 28 c2          	movaps xmm8,xmm2
    2083:	44 0f 28 e3          	movaps xmm12,xmm3
    2087:	44 0f 54 c6          	andps  xmm8,xmm6
    208b:	44 0f 2e 05 1d 11 00 	ucomiss xmm8,DWORD PTR [rip+0x111d]        # 31b0 <main@@Base+0x2050>
    2092:	00 
    2093:	44 0f 54 e6          	andps  xmm12,xmm6
    2097:	0f 97 c2             	seta   dl
    209a:	44 0f 2e 05 0e 11 00 	ucomiss xmm8,DWORD PTR [rip+0x110e]        # 31b0 <main@@Base+0x2050>
    20a1:	00 
    20a2:	77 74                	ja     2118 <main@@Base+0xfb8>
    20a4:	44 0f 2e 25 04 11 00 	ucomiss xmm12,DWORD PTR [rip+0x1104]        # 31b0 <main@@Base+0x2050>
    20ab:	00 
    20ac:	77 6a                	ja     2118 <main@@Base+0xfb8>
    20ae:	84 c0                	test   al,al
    20b0:	0f 85 b9 00 00 00    	jne    216f <main@@Base+0x100f>
    20b6:	0f 54 fe             	andps  xmm7,xmm6
    20b9:	0f 2e 3d f0 10 00 00 	ucomiss xmm7,DWORD PTR [rip+0x10f0]        # 31b0 <main@@Base+0x2050>
    20c0:	77 26                	ja     20e8 <main@@Base+0xf88>
    20c2:	44 0f 54 ce          	andps  xmm9,xmm6
    20c6:	44 0f 2e 0d e2 10 00 	ucomiss xmm9,DWORD PTR [rip+0x10e2]        # 31b0 <main@@Base+0x2050>
    20cd:	00 
    20ce:	77 18                	ja     20e8 <main@@Base+0xf88>
    20d0:	44 0f 54 d6          	andps  xmm10,xmm6
    20d4:	44 0f 2e 15 d4 10 00 	ucomiss xmm10,DWORD PTR [rip+0x10d4]        # 31b0 <main@@Base+0x2050>
    20db:	00 
    20dc:	0f 86 e6 00 00 00    	jbe    21c8 <main@@Base+0x1068>
    20e2:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    20e8:	0f 2e c0             	ucomiss xmm0,xmm0
    20eb:	0f 8a 4f 01 00 00    	jp     2240 <main@@Base+0x10e0>
    20f1:	0f 2e c9             	ucomiss xmm1,xmm1
    20f4:	0f 8a 36 01 00 00    	jp     2230 <main@@Base+0x10d0>
    20fa:	0f 2e d2             	ucomiss xmm2,xmm2
    20fd:	0f 8a 1d 01 00 00    	jp     2220 <main@@Base+0x10c0>
    2103:	0f 2e db             	ucomiss xmm3,xmm3
    2106:	7b 67                	jnp    216f <main@@Base+0x100f>
    2108:	0f 54 1d 91 10 00 00 	andps  xmm3,XMMWORD PTR [rip+0x1091]        # 31a0 <main@@Base+0x2040>
    210f:	eb 5e                	jmp    216f <main@@Base+0x100f>
    2111:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    2118:	0f b6 d2             	movzx  edx,dl
    211b:	66 0f ef e4          	pxor   xmm4,xmm4
    211f:	0f 28 fa             	movaps xmm7,xmm2
    2122:	31 c0                	xor    eax,eax
    2124:	f3 0f 2a e2          	cvtsi2ss xmm4,edx
    2128:	44 0f 2e 25 80 10 00 	ucomiss xmm12,DWORD PTR [rip+0x1080]        # 31b0 <main@@Base+0x2050>
    212f:	00 
    2130:	f3 44 0f 10 05 67 10 	movss  xmm8,DWORD PTR [rip+0x1067]        # 31a0 <main@@Base+0x2040>
    2137:	00 00 
    2139:	41 0f 54 f8          	andps  xmm7,xmm8
    213d:	0f 97 c0             	seta   al
    2140:	0f 2e c0             	ucomiss xmm0,xmm0
    2143:	0f 54 e6             	andps  xmm4,xmm6
    2146:	0f 56 e7             	orps   xmm4,xmm7
    2149:	0f 28 fb             	movaps xmm7,xmm3
    214c:	0f 28 d4             	movaps xmm2,xmm4
    214f:	66 0f ef e4          	pxor   xmm4,xmm4
    2153:	41 0f 54 f8          	andps  xmm7,xmm8
    2157:	f3 0f 2a e0          	cvtsi2ss xmm4,eax
    215b:	0f 54 e6             	andps  xmm4,xmm6
    215e:	0f 56 e7             	orps   xmm4,xmm7
    2161:	0f 28 dc             	movaps xmm3,xmm4
    2164:	7a 7a                	jp     21e0 <main@@Base+0x1080>
    2166:	0f 2e c9             	ucomiss xmm1,xmm1
    2169:	0f 8a 81 00 00 00    	jp     21f0 <main@@Base+0x1090>
    216f:	0f 28 e0             	movaps xmm4,xmm0
    2172:	0f 28 e9             	movaps xmm5,xmm1
    2175:	f3 0f 59 eb          	mulss  xmm5,xmm3
    2179:	f3 0f 59 e2          	mulss  xmm4,xmm2
    217d:	f3 0f 59 c3          	mulss  xmm0,xmm3
    2181:	f3 0f 59 ca          	mulss  xmm1,xmm2
    2185:	f3 0f 5c e5          	subss  xmm4,xmm5
    2189:	f3 0f 10 2d 23 10 00 	movss  xmm5,DWORD PTR [rip+0x1023]        # 31b4 <main@@Base+0x2054>
    2190:	00 
    2191:	f3 0f 58 c1          	addss  xmm0,xmm1
    2195:	f3 0f 59 e5          	mulss  xmm4,xmm5
    2199:	f3 0f 59 e8          	mulss  xmm5,xmm0
    219d:	f3 0f 11 64 24 f8    	movss  DWORD PTR [rsp-0x8],xmm4
    21a3:	f3 0f 11 6c 24 fc    	movss  DWORD PTR [rsp-0x4],xmm5
    21a9:	f3 0f 7e 44 24 f8    	movq   xmm0,QWORD PTR [rsp-0x8]
    21af:	c3                   	ret    
    21b0:	44 0f 2e 25 f8 0f 00 	ucomiss xmm12,DWORD PTR [rip+0xff8]        # 31b0 <main@@Base+0x2050>
    21b7:	00 
    21b8:	0f 87 5a fe ff ff    	ja     2018 <main@@Base+0xeb8>
    21be:	31 c0                	xor    eax,eax
    21c0:	e9 ba fe ff ff       	jmp    207f <main@@Base+0xf1f>
    21c5:	0f 1f 00             	nop    DWORD PTR [rax]
    21c8:	41 0f 54 f3          	andps  xmm6,xmm11
    21cc:	0f 2e 35 dd 0f 00 00 	ucomiss xmm6,DWORD PTR [rip+0xfdd]        # 31b0 <main@@Base+0x2050>
    21d3:	76 c8                	jbe    219d <main@@Base+0x103d>
    21d5:	e9 0e ff ff ff       	jmp    20e8 <main@@Base+0xf88>
    21da:	66 0f 1f 44 00 00    	nop    WORD PTR [rax+rax*1+0x0]
    21e0:	41 0f 54 c0          	andps  xmm0,xmm8
    21e4:	eb 80                	jmp    2166 <main@@Base+0x1006>
    21e6:	66 2e 0f 1f 84 00 00 	cs nop WORD PTR [rax+rax*1+0x0]
    21ed:	00 00 00 
    21f0:	41 0f 54 c8          	andps  xmm1,xmm8
    21f4:	e9 76 ff ff ff       	jmp    216f <main@@Base+0x100f>
    21f9:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    2200:	41 0f 54 d0          	andps  xmm2,xmm8
    2204:	e9 6d fe ff ff       	jmp    2076 <main@@Base+0xf16>
    2209:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    2210:	41 0f 54 d8          	andps  xmm3,xmm8
    2214:	e9 66 fe ff ff       	jmp    207f <main@@Base+0xf1f>
    2219:	0f 1f 80 00 00 00 00 	nop    DWORD PTR [rax+0x0]
    2220:	0f 54 15 79 0f 00 00 	andps  xmm2,XMMWORD PTR [rip+0xf79]        # 31a0 <main@@Base+0x2040>
    2227:	e9 d7 fe ff ff       	jmp    2103 <main@@Base+0xfa3>
    222c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    2230:	0f 54 0d 69 0f 00 00 	andps  xmm1,XMMWORD PTR [rip+0xf69]        # 31a0 <main@@Base+0x2040>
    2237:	e9 be fe ff ff       	jmp    20fa <main@@Base+0xf9a>
    223c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    2240:	0f 54 05 59 0f 00 00 	andps  xmm0,XMMWORD PTR [rip+0xf59]        # 31a0 <main@@Base+0x2040>
    2247:	e9 a5 fe ff ff       	jmp    20f1 <main@@Base+0xf91>
    224c:	0f 1f 40 00          	nop    DWORD PTR [rax+0x0]
    2250:	41 57                	push   r15
    2252:	4c 8d 3d 57 2b 00 00 	lea    r15,[rip+0x2b57]        # 4db0 <main@@Base+0x3c50>
    2259:	41 56                	push   r14
    225b:	49 89 d6             	mov    r14,rdx
    225e:	41 55                	push   r13
    2260:	49 89 f5             	mov    r13,rsi
    2263:	41 54                	push   r12
    2265:	41 89 fc             	mov    r12d,edi
    2268:	55                   	push   rbp
    2269:	48 8d 2d 50 2b 00 00 	lea    rbp,[rip+0x2b50]        # 4dc0 <main@@Base+0x3c60>
    2270:	53                   	push   rbx
    2271:	4c 29 fd             	sub    rbp,r15
    2274:	48 83 ec 08          	sub    rsp,0x8
    2278:	e8 83 ed ff ff       	call   1000 <pa_simple_read@plt-0x30>
    227d:	48 c1 fd 03          	sar    rbp,0x3
    2281:	74 1b                	je     229e <main@@Base+0x113e>
    2283:	31 db                	xor    ebx,ebx
    2285:	0f 1f 00             	nop    DWORD PTR [rax]
    2288:	4c 89 f2             	mov    rdx,r14
    228b:	4c 89 ee             	mov    rsi,r13
    228e:	44 89 e7             	mov    edi,r12d
    2291:	41 ff 14 df          	call   QWORD PTR [r15+rbx*8]
    2295:	48 83 c3 01          	add    rbx,0x1
    2299:	48 39 dd             	cmp    rbp,rbx
    229c:	75 ea                	jne    2288 <main@@Base+0x1128>
    229e:	48 83 c4 08          	add    rsp,0x8
    22a2:	5b                   	pop    rbx
    22a3:	5d                   	pop    rbp
    22a4:	41 5c                	pop    r12
    22a6:	41 5d                	pop    r13
    22a8:	41 5e                	pop    r14
    22aa:	41 5f                	pop    r15
    22ac:	c3                   	ret    
    22ad:	0f 1f 00             	nop    DWORD PTR [rax]
    22b0:	c3                   	ret    

Disassembly of section .fini:

00000000000022b4 <.fini>:
    22b4:	48 83 ec 08          	sub    rsp,0x8
    22b8:	48 83 c4 08          	add    rsp,0x8
    22bc:	c3                   	ret    
