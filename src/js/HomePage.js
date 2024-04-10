import React, { useState, useEffect } from 'react';
import { members } from '../mock/memberList'; // 프로젝트 구조에 맞게 경로를 조정하세요.

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMembers, setFilteredMembers] = useState([]);

    useEffect(() => {
        // 검색어에 따라 회원 필터링, 초기에는 모든 회원을 보여줍니다.
        setFilteredMembers(
            members.filter(member =>
                member.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="회원 검색..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded"
                />
                <button className="ml-2 p-2 bg-blue-500 text-white rounded">회원 추가</button>
            </div>
            <div className="member-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredMembers.map((member) => (
                    <div key={member.id} className="member-card p-4 border rounded shadow">
                        <h2 className="text-xl mb-2">{member.name}</h2>
                        <p>성별: {member.gender}</p>
                        <p>생일: {member.birthday}</p>
                        <p>센터 지역: {member.CenterRegion}</p>
                        <p>MAT: <pre>{JSON.stringify(member.MAT, null, 2)}</pre></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;